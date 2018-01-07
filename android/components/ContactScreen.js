import React from 'react';
import {
  Text,
  View,
  Button, TextInput
} from 'react-native';
import { StackNavigator } from 'react-navigation';


class ContactScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    return (
      <View>
         
        <Text>Enter Age</Text>
       <TextInput
        style={{height: 40, borderColor: 'black', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
       />     
        <Text>Enter Contact Number</Text>
       <TextInput
        style={{height: 40, borderColor: 'black', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
       />     
      </View>
    );
  }
}

export default ContactScreen;