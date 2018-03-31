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
  Navigator,
  ListView

} from 'react-native';

import Mask from "react-native-mask";

import Header from './header';
import LinearGradient from 'react-native-linear-gradient';


export default class main extends Component {

	render() {
    	return(
      <LinearGradient colors={['#1A2980','#1A2980']}>
	    <View style={styles.container}>
	    	<View style={styles.header}>
        		<Header text="LifeSaber" />
        	</View>
        	<View>
            <View style={styles.double}>
              <View style={styles.pic1}>
                <Image style={styles.pic} source={require('../images/person/shield.png')} />
              </View>
              <View style={styles.pic1}>
                <Image style={styles.pic} source={require('../images/person/shield.png')} />
              </View>
            </View>
        	</View>
      </View>
      </LinearGradient>
    )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f2f2',                        
  },
  contents: {
  	flex: 1,
  	flexDirection: 'row',
  	margin: 20,
  },
  double: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  pic1: {
    backgroundColor: '#fffef8',
    marginRight: 7,
    height: 170,
    width: 160,
    justifyContent: 'center',
  },
  header: {
  	height: 50,
  	flexDirection: 'row',
    backgroundColor: '#2081c3',
    marginBottom: 20,

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Roboto',
    color: '#0b5a8a',
  },
  instructions: {
    textAlign: 'center',
    color: '#e26097',
    marginBottom: 5,
    fontSize: 15,
  },
  picholder: {
  	padding: 10,
  	flexDirection: 'row',
  	borderRadius: 1,
  },
  hospital: {
	backgroundColor: '#5c0909',
	padding: 20,
	height: 120,
  },
  police: {
	backgroundColor: '#313956',
	padding: 20,
	height: 120,
  },
  parents: {
	backgroundColor: '#205153',
	padding: 20,
	height: 120,
  },
  loti: {
	backgroundColor: '#35961b',
  },
  pic: {
  	height: 80,
  	width: 80,
    justifyContent: 'center',
  },
   fire: {
	backgroundColor: '#200000',
	padding: 20,
	height: 120,
  },
});

AppRegistry.registerComponent('main', () => main);