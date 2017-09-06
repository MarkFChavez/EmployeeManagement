import React from 'react';
import { View, Text } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.cardContainerStyle}>
      {props.children}
    </View>
  )
}

const styles = {
  cardContainerStyle: {
    borderWidth: 1,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: '#333',
    shadowOpacity: 0.5,
    shadowOffset: { width: 1, height: 1 }
  }
}

export { Card };
