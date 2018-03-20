import React, { Component } from "react";
import { ImageBackground, StyleSheet } from "react-native";

export default class BackgroundImage extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../Assets/Image/player-clean.png")}
        style={style.imgBg}
        resizeMode="contain"
      >
        {this.props.children}
      </ImageBackground>
    );
  }
}

const style = StyleSheet.create({
  imgBg: {}
});
