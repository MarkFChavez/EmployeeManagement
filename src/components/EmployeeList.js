import React, { Component } from 'react';
import _ from 'lodash';
import { ListView, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import { ListItem } from './common';

class EmployeeList extends Component {
  static navigationOptions = {
    headerLeft: null
  }

  componentWillMount () {
    this.props.employeesFetch();
    this.setDataSource(this.props);
  }

  componentWillReceiveProps (nextProps) {
    console.log('hahaha');
    console.log(nextProps);
    this.setDataSource(nextProps);
  }

  setDataSource ({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.dataSource = ds.cloneWithRows(employees)
  }

  renderRow (employee) {
    return (
      <Text>{employee.name}</Text>
    )
  }

  render () {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (value, uid) => {
    return { ...value, uid };
  });

  return { employees };
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
