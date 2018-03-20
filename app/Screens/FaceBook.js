import React, { Component } from "react";

import { Platform, StyleSheet, Text, View } from "react-native";

export default class FaceBook extends Component<Props> {
  render() {
    return (
      <View style={style.view}>
        <Text>COMING SOON</Text>
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
    flex: 6,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});
