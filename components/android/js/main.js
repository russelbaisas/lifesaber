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
  ListView,
  button

} from 'react-native';

import Mask from "react-native-mask";

import Header from './header';
import LinearGradient from 'react-native-linear-gradient';

export default class main extends Component {

	render() {
    	return(

	    <View style={styles.container}>
        <LinearGradient colors={['#C02425','#F0CB35']}>
	    	<View style={styles.header}>
        		<Header text="LifeSaber" />
        	</View>
          
        	<View style={styles.people}>
            <LinearGradient colors={['#f30303','#ba0202']}>

            <View style={styles.sosmore}>
                  <Image style={styles.sospic} source={require('../images/person/more.png')} />
            </View> 
            <View style={styles.double1}>
              
              <View>
                <Image style={styles.pic} source={require('../images/person/alert-circled.png')} />
              </View>
            
            </View>

            <View style={styles.sosview}>
              <Text style={styles.sostext}>
                SOS Press Only For Emergency
              </Text>
            </View>   
            </LinearGradient>   


        	</View>

        </LinearGradient>
      </View>

    )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                       
  },
  contents: {
  	flex: 1,
  	flexDirection: 'row',
  	margin: 20,
  },
  double: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 40,
    marginLeft: 50,

  },
  sosview: {
    justifyContent: 'center',
  },  
  sosmore: {
    justifyContent: 'flex-end',
  },
  sospic: {
    height: 30,
    width: 30,
    paddingLeft: 5,
    justifyContent: 'flex-end',
  }, 
  sostext: {
    justifyContent: 'center',
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Roboto',
    color: 'white',
  }, 
  double1: {
    flexDirection: 'row',
    justifyContent: 'center', 
    paddingLeft: 110,
    paddingRight: 110,


  },
  people: {
    overflow: 'hidden',
    borderStyle: 'solid',
    borderColor: '#fc6c03',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 500,
    marginLeft: 10,
    marginRight: 10,

  },
  funct: {
  flexDirection: 'column',
  justifyContent: 'center',
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
    backgroundColor: 'transparent',
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
  	height: 90,
  	width: 90,
    justifyContent: 'center',
  },
  call1: {
    height: 40,
    width: 40,

  },
  msg1: {
    height: 40,
    width: 40,
    opacity: 0.7,
  },
   fire: {
	backgroundColor: '#200000',
	padding: 20,
	height: 120,
  },
});

AppRegistry.registerComponent('main', () => main);