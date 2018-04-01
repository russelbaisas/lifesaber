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

export default class rightbutton extends Component {

	render() {
		return(
        <Image style={styles.rightbutton} source={require('../images/person/ios7-gear.png')} />

			)}
}

const styles = StyleSheet.create({
    headerleftbutton: {
    padding: 10,
    marginBottom: 20,
    flex: 1,
    backgroundColor: '#990012',

   },
   rightbutton: {
   	height: 35,
   	width: 35,
    opacity: 0.7,
   }

});

AppRegistry.registerComponent('rightbutton', () => rightbutton);