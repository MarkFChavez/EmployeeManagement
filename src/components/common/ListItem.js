import React from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';

const ListItem = ({ employee }) => {
  return (
    <TouchableWithoutFeedback>
      <View>
        <Text> {name} </Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export { ListItem };
