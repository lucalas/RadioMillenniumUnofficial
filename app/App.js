import React, { Component } from "react";
import {Scene, Router, Stack, Tabs} from 'react-native-router-flux';
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";

import NavBar from "./Components/NavBar";

import Home from "./Screens/Home";
import FaceBook from "./Screens/FaceBook";
import WhatsApp from "./Screens/WhatsApp";

export default class App extends Component<Props> {
  render() {
    return <Router>
      <Tabs key="Tab" navBar={NavBar} tabBarPosition="bottom" activeBackgroundColor="#313232" inactiveBackgroundColor="#3e3e3e">
          <Scene key="Home" component={Home} icon={() => {return <Icon name="home" type="font-awesome" size={35} />}}/>
          <Scene key="FB" component={FaceBook} icon={() => {return <Icon name="facebook" type="font-awesome" size={30} />}}/>
          <Scene key="WA" component={WhatsApp} icon={() => {return <Icon name="whatsapp" type="font-awesome" size={30} />}}/>
      </Tabs>
    </Router>;
  }
}

const style = StyleSheet.create({
  appStyle: {
    backgroundColor: "#313232"
  }
});
