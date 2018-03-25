import React, { Component } from "react";

import { StyleSheet, TextInput, View, Button, Linking, Image } from "react-native";
import { Text } from 'react-native-elements';

import Config from 'react-native-config';

const telephonenumber = Config.telephonenumber;

export default class WhatsApp extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { message: "" };
  }

  render() {
    return (
      <View style={style.view}>
        <Text h4 style={style.msg_style}>I messaggi verranno inviati solo se WhatsApp è installato sul dispositivo!</Text>
        <View style={style.img_container}>
          <Image
            source={require("../Assets/Image/WhatsApp-icon.png")}
            style={style.wa_icon}
            resizeMode="contain"
          />
        </View>
        <TextInput
          style={{height: 40, borderColor: "gray", borderWidth: 1}}
          onChangeText={(message) => this.setState({message})}
          value={this.state.message}
          placeholder="Scrivi qualcosa!"
        />
        <Button title="Invia" onPress={() => {this.sendWAMsg(this.state.message)}}/>
      </View>
    );
  }

  sendWAMsg(msg) {
    var number = telephonenumber;
    Linking.openURL("whatsapp://send?text=" + encodeURI(msg) + "&phone=" + number);
  }
}


const style = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center"
  },
  body: {
    flex: 6,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  wa_icon:{
    width:100,
    height:100
  },
  img_container: {
  justifyContent: "center",
  alignItems: "center"
},
msg_style: {
  flex: 0.6,
  flexWrap: 'wrap',
  textAlign:'center'
}
});
