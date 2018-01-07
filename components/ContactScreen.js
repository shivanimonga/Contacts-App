import React from 'react';
import {
  Text,
  View,
  Button, 
  TextInput
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { addContact } from '../actions'
import { connect } from 'react-redux';

class ContactScreen extends React.Component {
  static navigationOptions = {
    title: 'Add Contact',
  };
   constructor(props) {
        super(props)
 let name,age,number;
    }
  render() {
    const {goBack} = this.props.navigation;
   
    return (
      <View> 

        <Text>Enter Name</Text>
       <TextInput
        style={{height: 40, borderColor: 'black', borderWidth: 1}}
        onChangeText={(text) => this.name=text}
       /> 

        <Text>Enter Age</Text>
       <TextInput
        style={{height: 40, borderColor: 'black', borderWidth: 1}}
        onChangeText={(text) => (this.age=text)}
       /> 

        <Text>Enter Contact Number</Text>
       <TextInput
        style={{height: 40, borderColor: 'black', borderWidth: 1}}
        onChangeText={(text) => this.number=text}
       />  
          <Button
          onPress={() => (this.props.onSaveClick(this.name,this.age,this.number),
                          goBack())}
        title="Save"
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
  return {
    onSaveClick: (name,age,number) => {
      dispatch(addContact(name,age,number))
    }
  }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ContactScreen);