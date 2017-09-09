import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 25 }}>
      <Scene key="root">
        <Scene
          key="login"
          title="Manager Login"
          component={LoginForm}
          initial
        />
        <Scene
          rightTitle="Add"
          onRight={() => Actions.employeeCreate()}
          key="employeeList"
          title="Employees"
          component={EmployeeList}
        />
        <Scene
          key="employeeCreate"
          title="Add Employee"
          component={EmployeeCreate}
        />
      </Scene>
    </Router>
  )
}

export default RouterComponent
