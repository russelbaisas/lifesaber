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

import LeftButton from './leftbutton';
import RightButton from './rightbutton';

export default class header extends Component {

	render() {
		return(
		<View style={styles.headerContainter}>


        <View style={styles.headerTitle}>

        <Text style={styles.namebrand}> {this.props.text}</Text>
       	</View >

       	<View style={styles.rightTitle}>
		<RightButton image />
		</View>

      </View>
			
	)}
}

const styles = StyleSheet.create({
    headerContainter: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',

   },
   headerTitle: {
    alignItems: 'center',
    justifyContent: 'center'

   },
   namebrand: {
    color: '#f7f9f9',
    fontSize: 20,
    opacity: 0.7,
   },
   rightTitle: {
   	flex: 1,
   	alignItems: 'flex-end',
   },
   leftTitle: {
   	flex: 1,
   	justifyContent: 'flex-start',
   	alignItems: 'flex-start'
   }

});

AppRegistry.registerComponent('header', () => header);