import React from 'react';
import { View, StyleSheet,TouchableOpacity,Text } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from '@expo/vector-icons/Feather';
import colors from '../config/colors';
import AccountNavigation from './AccountNavigation';
import Home from '../screens/Home';
import HomeNavigation from './HomeNavigation';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Checkout from '../screens/Checkout';



function AppNavigator() {
    const Tab = createBottomTabNavigator();

    const getRouteName=(route)=>{
      const routeName=getFocusedRouteNameFromRoute(route);
      if(routeName?.includes('Food Details')){
        return 'none';
      }
      return 'flex';
    }
  return (
    <Tab.Navigator screenOptions={{
  tabBarShowLabel:false,
  tabBarActiveTintColor:colors.primary,
  tabBarInactiveTintColor:colors.dark,
  tabBarStyle:{
    backgroundColor:colors.white,
    borderTopWidth:0,
    
    
    
  }
  
    }}>
        <Tab.Screen
         name={"My Home"}
         component={HomeNavigation}
         options={({navigation,route})=>({
          tabBarStyle:{display:getRouteName(route)},
          headerShown:false,
             tabBarIcon:({size,focused,color})=>
             <View>
             <View style={{}}>
             <Feather size={size} name="home" focused={focused} color={color} />
             {focused && <Text focused={focused} style={{alignSelf:"center", color:colors.primary,bottom:0,marginBottom:-17}}>_</Text>}
             </View>
             
             </View>
             
            
             
         })}

        />
         <Tab.Screen
         name={"Search"}
         component={Home}
         options={({navigation})=>({
          headerShown:false,
             tabBarIcon:({size,color})=>
             <Feather size={size} name="search" color={colors.dark}/>
            
             
         })}

        />
         <Tab.Screen
         name={"Checkout"}
         component={Checkout}
         options={{
          headerShown:false,
           tabBarIcon:({size,focused,color})=>
           <View>
           <View style={{}}>
           <Feather size={size} name="shopping-bag" color={color}  focused={focused}/>
           {focused && <Text focused={focused} style={{alignSelf:"center", color:colors.primary,bottom:0,marginBottom:-17}}>_</Text>}
           </View>
           
           </View>
           
       }}

        />
         <Tab.Screen
         name={"Likes"}
         component={Home}
         options={({navigation})=>({
          headerShown:false,
             tabBarIcon:({size,color})=>
             <Feather size={size} name="heart" color={colors.dark}/>
            
             
         })}

        />
         <Tab.Screen
         name={"My Account"}
         component={AccountNavigation}
         options={{
            headerShown:false,
             tabBarIcon:({size,focused,color})=>
             <View>
             <View style={{}}>
             <Feather size={size} name="user" color={color}  focused={focused}/>
             {focused && <Text focused={focused} style={{alignSelf:"center", color:colors.primary,bottom:0,marginBottom:-17}}>_</Text>}
             </View>
             
             </View>
             
         }}

        />






        

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default AppNavigator;