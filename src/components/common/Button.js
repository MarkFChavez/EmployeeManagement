import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
      <Text style={styles.textStyle}> {props.text} </Text>
    </TouchableOpacity>
  )
}

const styles = {
  buttonStyle: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#4267b2'
  },

  textStyle: {
    color: '#4267b2',
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
}

export { Button };
