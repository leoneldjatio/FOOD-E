import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../screens/Account';
import AccountAndProfile from '../screens/AccountAndProfile';
import Feather from '@expo/vector-icons/Feather';
import colors from '../config/colors';
import PreviewProfilePicture from '../screens/PreviewProfilePicture';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import ChangePassword from '../screens/ChangePassword';

const Stack = createStackNavigator();

function AccountNavigation() {
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Stack.Navigator>
        <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown:false}}
        />
        <Stack.Screen
        name="Account and Profile"
        component={AccountAndProfile}
        options={{headerShown:true,
          headerTintColor:colors.primary_dark,
          headerBackTitleVisible: false,
          headerShadowVisible:false,
          headerTitle: "",
          headerBackImage:()=><Feather name="chevron-left" style={{paddingLeft:20}} size={25} color={colors.dark}/>}}
        />

      <Stack.Screen
        name="Preview Profile Picture"
        component={PreviewProfilePicture}
        
        options={({navigation,route})=>({headerShown:true,
          gestureEnabled: false,
          headerTintColor:colors.primary_dark,
          headerBackTitleVisible: false,
          headerTitleStyle: {color:colors.dark,fontWeight: "700",
          fontSize: 17,fontFamily: "Poppins_600SemiBold"},
          headerShadowVisible:false,
          headerTitle: "Preview profile picture",
          headerBackImage:()=><Feather name="chevron-left" style={{marginLeft:20}} size={25} color={colors.dark}/>})}
        />

<Stack.Screen
        name="Change Password"
        component={ChangePassword}
        options={{headerShown:true,
          headerTintColor:colors.primary_dark,
          headerBackTitleVisible: false,
          headerShadowVisible:false,
          headerTitle: "",
          headerBackImage:()=><Feather name="chevron-left" style={{paddingLeft:20}} size={25} color={colors.dark}/>}}
        />
      </Stack.Navigator>
  );
}
export default AccountNavigation;