import React, { Component } from "react";

import { Platform, StyleSheet, Text, View, WebView, ActivityIndicator } from "react-native";

import Config from 'react-native-config';

export default class FaceBook extends Component<Props> {

  loaderFBView() {
    return <ActivityIndicator
            size="large"
            color="#0000ff"
            hidesWhenStopped={true}
            animating={true}
            style={style.body}
          />
  }

  render() {
    // TODO Maybe we can implements a custom view to show page instead of open webview to show facebook site page
    return (
        <WebView
        source={{uri: Config.radiofbpage}}
        renderLoading={this.loaderFBView} startInLoadingState={true}
        />
    );
  }
}


const style = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});
