import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Searchscreen from './screens/SearchScreen';
import Transjectionscreen from './screens/TransjectionScreen';
import {createAppContainer} from 'react-navigation';


export default class App extends React.Component{
  render(){
  return (
    <AppContainer/>
  )
  }
}

const TabNavigator = createBottomTabNavigator({
  Transjection:{screen:Transjectionscreen},
  Search:{screen:Searchscreen}
}); 

const AppContainer = createAppContainer(TabNavigator)

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
