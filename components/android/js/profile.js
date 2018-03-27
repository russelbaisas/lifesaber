'use strict';
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  View,
  Image,
  Navigator
} from 'react-native';


//import LeftButton from './leftbutton';
//import RightButton from './rightbutton';
import Header from './header';


export default class profile extends Component {

  render() {
    return(


    <View style={styles.Containter}>
        <View>
        <Header text="Gypsy" />
        </View>

      </View>
      
  )}
}

const styles = StyleSheet.create({
    headerContainter: {
    padding: 10,
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'orange',
  }

});

AppRegistry.registerComponent('profile', () => profile);