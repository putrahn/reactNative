
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {Provider} from "react-redux";
import {createStore} from 'redux';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { AppRegistry, TextInput } from 'react-native';
import customerReducer from './redux/customerReducer';


import {createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator } from "react-navigation";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Login from './component/Login';
import Register from './component/Register';


import Main from './component/transaction/Main';
import TransactionView from './component/transaction/TransactionHome';
import TransactionTopUp from './component/transaction/TransactionTopUp';
import TransactionTransfer from './component/transaction/TransactionTransfer';
import TransactionWithraw from './component/transaction/TransactionWithdraw';

import TradingView from './component/trading/TradingView'

const tabBarIcon = name => ({ tintColor }) => (
  <MaterialIcons
    style={{ backgroundColor: 'transparent' }}
    name={name}
    color={tintColor}
    size={20}
  />
);

const RootStack = createStackNavigator({
  Login :{screen: Login},
  Register : {screen : Register},
  Main : {screen: Main}
});

const LoginApp = createStackNavigator({
  Login : {screen : Login}
})

const TabBottom = createMaterialBottomTabNavigator({
  Main:{
    screen : Main,
    navigationOptions: {
      tabBarIcon: tabBarIcon('home'),
    }
  },
  Trading:{
    screen:TradingView,
    navigationOptions: {
      tabBarIcon: tabBarIcon('show-chart'),
    }
  }
});

const RootSwitch = createSwitchNavigator({
  Login :{screen: Login},
  Register : {screen : Register},
  Main : {screen: Main}
})

// const AppContainer = createAppContainer(RootSwitch);

const AppContainer  = createAppContainer(
  createSwitchNavigator(
  {
    Auth: RootStack,
    Dashboard: TabBottom,
  },
  {
    initialRouteName: 'Auth',
  }
  )
);

export default AppContainer 
// extends Component{
//   render(){
//     return (
//       <Provider store ={store}>
//       <AppContainer/>
//       </Provider>

//     )
//   }
// };

