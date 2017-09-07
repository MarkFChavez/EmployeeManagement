import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';
import { emailChange, passwordChange, loginUser } from '../actions';

class LoginForm extends Component {
  onButtonPress () {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderError () {
    const { error } = this.props;

    if (error !== '') {
      const { errorContainerStyle, errorTextStyle } = styles;

      return (
        <View style={errorContainerStyle}>
          <Text style={errorTextStyle}> {error} </Text>
        </View>
      )
    }
  }

  renderButton () {
    if (this.props.loading) {
      return <Spinner size='large' />;
    }

    return <Button text="Log In" onPress={this.onButtonPress.bind(this)} />;
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

        {this.renderError()}
        {this.renderButton()}
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    color: 'red',
    fontSize: 18,
    alignSelf: 'center'
  },

  errorContainerStyle: {
    marginTop: 5,
    marginBottom: 5
  }
}

const mapStateToProps = (state) => {
  const { email, password, error, loading } = state.auth;
  return { email, password, error, loading }
}

export default connect(mapStateToProps, { emailChange, passwordChange, loginUser })(LoginForm);
