import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';
import Store from './app/redux/store';
import { Provider, useSelector } from 'react-redux';
import Card from './app/component/Card';
import Screen from './app/component/Screen';
import colors from './app/config/colors';
import { View, StyleSheet,ScrollView } from 'react-native';
import Logo from './app/component/Logo';
import Coupon from './app/component/Coupon';
import AppIcon from './app/component/AppIcon';
import Home from './app/screens/Home';





export default function App() {
  //const token = useSelector(state => state.userReducer.authToken)
  return (
    <Provider store={Store}>
     <NavigationContainer>
     <AppNavigator/>
    </NavigationContainer>   
    
     
    </Provider>


  );
}



