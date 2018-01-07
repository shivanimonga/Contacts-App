import React from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  ToastAndroid
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  _keyExtractor = (item, index) => {
    console.log("in keyExtractor  " + item.key.id);
    item.key.id
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end' }}>
        <FlatList
          data={
            this.props.contacts.map(contact => (
              { key: contact }
            ))
          }
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) =>
            <View>
              <Text 
                id={item.key.id}
                key={item.key.id}
                onPress={() => {
                 ToastAndroid.show(item.key.id +' clicked', ToastAndroid.SHORT);
                 /* navigate('ViewContactScreen',
                    {
                      id: item.key.id,
                      firstName: item.key.firstName,
                      lastName: item.key.lastName,
                      gender: item.key.gender,
                      contact: item.key.contact
                    }

                  )*/
                }
                }
              >
                {item.key.name}
              </Text>
              </View>
          }
          />
        <Button
          onPress={() => navigate('Contact')}
          title="Add Contact"
        />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    contacts: state
  }
}
const mapDispatchToProps = dispatch => {
  return {

  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);