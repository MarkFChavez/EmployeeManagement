import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  render () {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="juan@pilipinas.com"
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
          />
        </CardSection>

        <Button text="Log In" onPress={() => console.log('pressed')} />
      </Card>
    )
  }
}

export default LoginForm;
