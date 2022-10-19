import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoardingOne from '../screens/OnBoardingOne';
import OnBoardingTwo from '../screens/OnBoardingTwo';
import OnBoardingThree from '../screens/OnBoardingThree';
import GetStarted from '../screens/GetStarted';
import Login from '../screens/Login';
import Register from '../screens/Register';
import ForgotPassword from '../screens/ForgotPassword';
import colors from '../config/colors';
import Feather from '@expo/vector-icons/Feather';
import ResendEmailVerification from '../screens/ResendEmailVerification';
import ResetPassword from '../screens/ResetPassword';

const Stack = createStackNavigator();

const AuthNavigator=() => (
    <Stack.Navigator>
       <Stack.Screen 
       name="first"
       component={OnBoardingOne}
       options={{headerShown:false}}
       /> 
       <Stack.Screen 
       name="second"
       component={OnBoardingTwo}
       options={{headerShown:false}}
       /> 
       <Stack.Screen 
       name="third"
       component={OnBoardingThree}
       options={{headerShown:false}}
       /> 
       <Stack.Screen 
       name="get started"
       component={GetStarted}
       options={{headerShown:false}}
       />
       <Stack.Screen 
       name="login"
       component={Login}
       options={{headerShown:true,
        headerTintColor:colors.primary_dark,
        headerBackTitleVisible: false,
        headerShadowVisible:false,
        headerTitle: "",
        headerBackImage:()=><Feather name="x" style={{paddingLeft:20}} size={25} color={colors.dark}/>}}
       /> 
       <Stack.Screen 
       name="register"
       component={Register}
       options={{headerShown:true,
        headerTintColor:colors.primary_dark,
        headerBackTitleVisible: false,
        headerShadowVisible:false,
        headerTitle: "",
        headerBackImage:()=><Feather name="x" style={{paddingLeft:20}} size={25} color={colors.dark}/>}}
       /> 
       <Stack.Screen 
       name="forgot password"
       component={ForgotPassword}
       options={{headerShown:true,
        headerTintColor:colors.primary_dark,
        headerBackTitleVisible: false,
        headerShadowVisible:false,
        headerTitle: "",
        headerBackImage:()=><Feather name="x" style={{paddingLeft:20}} size={25} color={colors.dark}/>}}
       /> 
        <Stack.Screen 
       name="reset password"
       component={ResetPassword}
       options={{headerShown:true,
        headerTintColor:colors.primary_dark,
        headerBackTitleVisible: false,
        headerShadowVisible:false,
        headerTitle: "",
        headerBackImage:()=><Feather name="x" style={{paddingLeft:20}} size={25} color={colors.dark}/>}}
       /> 
       <Stack.Screen 
       name="resend email verification"
       component={ResendEmailVerification}
       options={{headerShown:false}}
       /> 
    </Stack.Navigator>
  );



export default AuthNavigator;