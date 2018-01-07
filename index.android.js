import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import  ContactScreen  from './components/ContactScreen';
import  HomeScreen from './components/HomeScreen';

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import contactReducer from './reducers/index'

let store=createStore(contactReducer);


const ContactsApp = StackNavigator({
  Home: { screen: HomeScreen },
  Contact: { screen: ContactScreen }
});

class MyApp extends React.Component{
 render(){
  return(
  <Provider store={store}>
  <ContactsApp/>
  </Provider>
  );
 }
}


AppRegistry.registerComponent('ContactsApp', () => MyApp);
