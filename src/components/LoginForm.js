import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection } from './common';

class LoginForm extends Component {
  render () {
    return (
      <Card>
        <CardSection>
          <Text> Email </Text>
        </CardSection>

        <CardSection>
          <Text> Password </Text>
        </CardSection>

        <CardSection>
          <Text> Button </Text>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm;
