import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Feather from '@expo/vector-icons/Feather';
import colors from '../config/colors';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import FoodDetails from '../screens/FoodDetails';
import Home from '../screens/Home';
import { View } from 'react-native';
import {BlurView} from 'expo-blur';

const Stack = createStackNavigator();
    
function HomeNavigation(props) {
    let [fontsLoaded] = useFonts({
        Poppins_600SemiBold,
      });
      if (!fontsLoaded) {
        return null;}
  return (
    <Stack.Navigator>
        <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown:false}}
        />
        <Stack.Screen
        name="Food Details"
        component={FoodDetails}
        options={{headerShown:true,
          headerTintColor:colors.primary_dark,
          headerBackTitleVisible: false,
          headerTransparent:true,
          headerShadowVisible:false,
          headerTitle: "",
          headerBackImage:()=><View style={{borderRadius:10
            }}><BlurView intensity={20}  
          style={{
          marginTop:10,
          overflow:"hidden",
          left:25,
          borderRadius: 5,
          backgroundColor: "rgba(255, 255, 255, 0.2)",}}><Feather name="chevron-left" style={{ padding: 5}} size={25} color={colors.white}/></BlurView></View>}}
        />
    </Stack.Navigator>
  );
}



export default HomeNavigation;