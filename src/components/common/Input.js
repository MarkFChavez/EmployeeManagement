import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

class Input extends Component {
  render () {
    const { containerStyle, labelStyle, inputStyle } = styles;
    const {
      label,
      secureTextEntry,
      placeholder,
      onChangeText,
      value
    } = this.props;

    return (
      <View style={containerStyle}>
        <Text style={labelStyle}> {label} </Text>
        <TextInput
          secureTextEntry={secureTextEntry}
          style={inputStyle}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
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

  labelStyle: {
    flex: 1,
    fontSize: 14,
    paddingLeft: 10
  },

  inputStyle: {
    flex: 2,
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 14,
    lineHeight: 23
  }
}

export { Input };
