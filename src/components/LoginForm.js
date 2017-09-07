import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { emailChange, passwordChange, loginUser } from '../actions';

class LoginForm extends Component {
  onButtonPress () {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

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
            onChangeText={password => this.props.passwordChange(password)}
            value={this.props.password}
          />
        </CardSection>

        <Button text="Log In" onPress={this.onButtonPress.bind(this)} />
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { email, password } = state.auth;
  return { email, password }
}

export default connect(mapStateToProps, { emailChange, passwordChange, loginUser })(LoginForm);
