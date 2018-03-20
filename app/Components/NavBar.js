import React, { Component } from "react";

import { StyleSheet, View, Image } from "react-native";

export default class NavBar extends Component<Props> {
  render() {
    return <View style={style.header}>
      <Image
        source={require("../Assets/Image/header.png")}
        style={style.image}
        resizeMode="contain"
      />
    </View>
  }
}

const style = StyleSheet.create({
  image: {
    flex: 1
  },
  header: {
    flex: 0.15,
    paddingTop: 10,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#272626"
  }
});
