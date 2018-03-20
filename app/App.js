/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";

import RadioPlayer from "./Components/RadioPlayer";
import { SliderVolumeController } from "react-native-volume-controller";

export default class App extends Component<Props> {
  render() {
    return (
      <View style={style.view}>
        <View style={style.header}>
          <Image
            source={require("./Assets/Image/header.png")}
            style={style.image}
            resizeMode="contain"
          />
        </View>
        <View style={style.body}>
          <RadioPlayer style={style.player} />
        </View>

        <View style={style.footer}>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  image: {
    flex: 1,
    margin: 10
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#313232"
  },
  player: {},
  slider: {
    height: 30,
    marginLeft: 7,
    width: 100
  },
  header: {
    backgroundColor: "rgba(00, 00, 00, 0.7)",
    paddingTop: 10,
    paddingBottom: 20,
    flex: 2
  },
  body: {
    flex: 6,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  footer: {
    flex: 2
  }
});
