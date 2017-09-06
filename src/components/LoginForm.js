import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { emailChange } from '../actions/AuthActions';

class LoginForm extends Component {
  render () {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="juan@pilipinas.com"
            onChangeText={text => this.props.emailChange(text)}
            value={this.props.email}
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

const mapStateToProps = (state) => {
  const { email } = state.auth;
  return { email }
}

export default connect(mapStateToProps, { emailChange })(LoginForm);
