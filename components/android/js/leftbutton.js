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

export default class leftbutton extends Component {

	render() {
		return(

      <Image style={styles.leftbutton} source={require('../images/person/logo.png')} />
        

			)}
}

const styles = StyleSheet.create({
    headerleftbutton: {
    padding: 10,
    flexDirection: 'row',
    marginBottom: 20,
    flex: 1,
    backgroundColor: '#990012',

   },
   leftbutton: {
   	height: 30,
   	width: 30,
   }

});

AppRegistry.registerComponent('leftbutton', () => leftbutton);