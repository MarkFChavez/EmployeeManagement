import React, { Component } from 'react';
import { View, Text } from 'react-native';

class EmployeeList extends Component {
  static navigationOptions = {
    headerLeft: null
  }
  
  render () {
    return (
      <View>
        <Text> List of employees </Text>
      </View>
    )
  }
}

export default EmployeeList;
