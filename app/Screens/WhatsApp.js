import React, { Component } from "react";

import { StyleSheet, TextInput, View, Button } from "react-native";

export default class WhatsApp extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { message: "" };
  }

  render() {
    return (
      <View style={style.view}>
      <TextInput
        style={{height: 40, borderColor: "gray", borderWidth: 1}}
        onChangeText={(message) => this.setState({message})}
        value={this.state.message}
        placeholder="Scrivi qualcosa!"
      />
      <Button title="Invia" onPress={() => {}}/>
    </View>
    );
  }

  sendWAMsg() {
    // TODO Verify if works correctly and may move telephone number into a config class 
    var number = "3401569580";
    Linking.openURL("whatsapp://send?text=" + encodeURI(this.state.message) + "&phone=" + number);
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
  }
});
