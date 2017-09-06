import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

class Input extends Component {
  render () {
    const { containerStyle, textStyle, inputStyle } = styles;
    const { label, secureTextEntry, placeholder } = this.props;

    return (
      <View style={containerStyle}>
        <Text style={textStyle}> {label} </Text>
        <TextInput
          secureTextEntry={secureTextEntry}
          style={inputStyle}
          placeholder={placeholder}
        />
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40
  },

  textStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20
  },

  inputStyle: {
    flex: 2,
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23
  }
}

export { Input };
