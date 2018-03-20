import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  DeviceEventEmitter,
  ImageBackground
} from "react-native";
import { Icon } from "react-native-elements";
import { ReactNativeAudioStreaming } from "react-native-audio-streaming";

/**
 * This is the Radio Millennium Radio ULR.
 */
const RADIO_URL = "http://sr7.inmystream.info:8068/;stream.mp3";
const RADIO_INFO_URL =
  "https://www.inmystream.info/play/millennium/index.php?c=Radio%20Millennium";

// Radio status
const PLAYING = "PLAYING";
const STREAMING = "STREAMING";
const PAUSED = "PAUSED";
const STOPPED = "STOPPED";
const ERROR = "ERROR";
const METADATA_UPDATED = "METADATA_UPDATED";
const BUFFERING = "BUFFERING";
const START_PREPARING = "START_PREPARING"; // Android only
const BUFFERING_START = "BUFFERING_START"; // Android only

export default class RadioPlayer extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      iconStatus: "play",
      status: STOPPED,
      radioInfo: {}
    };

    this.changeStatusClick = this.changeStatusClick.bind(this);
  }

  componentDidMount() {
    // Create a new listener for event emitter of radio status change.
    // This help us to know at runtime if status is changed.
    this.subscription = DeviceEventEmitter.addListener(
      "AudioBridgeEvent",
      stat => {
        // Save all metadata info that maybe can be usefull in future
        if (stat.status === METADATA_UPDATED) {
          let obj = {};
          obj[stat.key] = stat.value;
          this.setState(obj);
        } else {
          console.log(JSON.stringify(stat));
          // Change player and icon status
          this.setState(stat);
          switch (this.state.status) {
            case PLAYING:
            case STREAMING:
              this.setState({ iconStatus: "pause" });
              break;
            case PAUSED:
            case STOPPED:
            case ERROR:
              this.setState({ iconStatus: "play" });
              break;
          }
        }
        console.log(JSON.stringify(this.state));
      }
    );

    // Get statup status of radio player
    ReactNativeAudioStreaming.getStatus((err, stat) => {
      if (err) {
        console.log("Error init radio player " + err);
      } else {
        this.setState(stat);
      }
    });

    // Start schedule of radio info
    this.scheduleGetRadioInfo();
  }

  getRadioInfo() {
    fetch(RADIO_INFO_URL)
      .then(radioInfo => radioInfo.json())
      .then(radioInfoJson => {
        this.setState({ radioInfo: radioInfoJson });
      })
      .catch(error => {
        console.error(error);
      });
  }

  scheduleGetRadioInfo() {
    // Get immediately then start schedule
    this.getRadioInfo();
    // Every 20 seconds (by default) get radio info to update status
    setInterval(() => {
      // TODO update only if i'm in playing status
      console.log("Schedule get radio info started");
      this.getRadioInfo();
      console.log("Schedule get radio info finished");
    }, this.props.infoUpdate * 1000);
  }

  changeStatusClick() {
    switch (this.state.status) {
      case PLAYING:
      case STREAMING:
        ReactNativeAudioStreaming.pause();
        break;
      case PAUSED:
        ReactNativeAudioStreaming.resume();
        break;
      case STOPPED:
      case ERROR:
        ReactNativeAudioStreaming.play(RADIO_URL, {
          showIniOSMediaCenter: true,
          showInAndroidNotifications: true
        });
        break;
      case BUFFERING:
        ReactNativeAudioStreaming.stop();
        break;
    }
  }

  _renderIcon() {
    let icon = null;
    switch (this.state.status) {
      case PLAYING:
      case STREAMING:
      case PAUSED:
      case STOPPED:
      case ERROR:
        icon = (
          <Icon name={this.state.iconStatus} type="font-awesome" size={50} />
        );
        break;
      case BUFFERING:
      case BUFFERING_START:
      case START_PREPARING:
        icon = (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            hidesWhenStopped={true}
            animating={true}
          />
        );
        break;
    }

    return icon;
  }

  render() {
    let icon = this._renderIcon();
    return (
      <View>
        <ImageBackground
          source={require("../Assets/Image/player-clean.png")}
          style={styles.container}
          resizeMode="contain"
        >
          <TouchableOpacity
            onPress={this.changeStatusClick}
            style={styles.player}
          >
            {icon}
          </TouchableOpacity>
        </ImageBackground>
        <Text>{this.state.radioInfo.artist}</Text>
        <Text>{this.state.radioInfo.title}</Text>
      </View>
    );
  }
}

RadioPlayer.defaultProps = { infoUpdate: 20 };

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 180
  },
  player: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});
