
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Scene, 
         Router, 
         TabBar, 
         Modal, 
         Schema, 
         Actions, 
         Reducer, 
         ActionConst 
} from 'react-native-router-flux';

import Main from './components/android/js/main';
import Profile from './components/android/js/profile';

export default class App extends Component {
  render() {
    return (
          <Router>
            <Scene key="root" hideNavBar={true}>
              <Scene key="main" component={Main} initial={true} />
               <Scene key="profile" component={Profile} title="profile"  />
            </Scene>
          </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',                          
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Roboto',
    color: 'white',
  },
  instructions: {
    textAlign: 'center',
    color: '#e26097',
    marginBottom: 5,
    fontSize: 15,
  },
});
