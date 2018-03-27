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



export default class main extends Component {

	render() {
    	return(
	    <View style={styles.container}>
	    	<View style={styles.header}>
        		<Header text="Emergency Call" />
        	</View>
        	<View>

        		<View style={styles.police}>
        			
        				<Image style={styles.pic} source={require('../images/person/shield.png')} />
        		</View>
        		<View style={styles.fire}>
        			
        				<Image style={styles.pic} source={require('../images/person/ftruck.png')} />
        		</View>
        		<View style={styles.parents}>
        			
        				<Image style={styles.pic} source={require('../images/person/parents.png')} />
        		</View>
        		<View style={styles.hospital}>
        			
        				<Image style={styles.pic} source={require('../images/person/eambulance2.png')} />        			
        		</View>

        	</View>
      </View>
    )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dae6f0',                        
  },
  contents: {
  	flex: 1,
  	flexDirection: 'row',
  	margin: 20,
  },
  header: {
  	height: 50,
  	flexDirection: 'row',

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
	height: 150,
  },
  police: {
	backgroundColor: '#313956',
	padding: 20,
	height: 150,
  },
  parents: {
	backgroundColor: '#205153',
	padding: 20,
	height: 150,
  },
  loti: {
	backgroundColor: '#35961b',
  },
  pic: {
  	height: 110,
  	width: 110,
  },
   fire: {
	backgroundColor: '#200000',
	padding: 20,
	height: 150,
  },
});

AppRegistry.registerComponent('main', () => main);