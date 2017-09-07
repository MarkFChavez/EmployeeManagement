import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = (props) => {
  return (
    <View>
      <ActivityIndicator size={props.size || 'small'} />
    </View>
  )
}

export { Spinner };
