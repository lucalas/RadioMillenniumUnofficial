import React, { Component } from "react";

import { Platform, StyleSheet, Text, View, Image } from "react-native";

import RadioPlayer from "../Components/RadioPlayer";

export default class Home extends Component<Props> {
  render() {
    return (
      <View style={style.view}>
        <View style={style.body}>
          <RadioPlayer style={style.player} />
        </View>
      </View>
    );
  }
}


const style = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#464848"
  },
  body: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});
