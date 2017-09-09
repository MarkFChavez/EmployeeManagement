import React, { Component } from 'react'
import { Text, View, Picker } from 'react-native'
import { Card, CardSection, Input, Button } from './common'
import { employeeUpdate, employeeCreate } from '../actions'
import { connect } from 'react-redux'

class EmployeeCreate extends Component {
  onButtonPress () {
    // action creator -> EMPLOYEE_CREATE
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Juan Pilipinas"
            onChangeText={text => this.props.employeeUpdate('name', text)}
            value={this.props.name}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-5555"
            onChangeText={text => this.props.employeeUpdate('phone', text)}
            value={this.props.phone}
          />
        </CardSection>

        <CardSection>
          <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}> Shift </Text>
          </View>
        </CardSection>

        <CardSection>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate('shift', value)}
            >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>

        <Button text="Create" onPress={this.onButtonPress.bind(this)} />
      </Card>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    height: 40
  },

  labelStyle: {
    flex: 1,
    fontSize: 14,
    paddingLeft: 10
  }
}

const mapStateToProps = ({ employee }) => {
  const { name, phone, shift } = employee;
  return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
