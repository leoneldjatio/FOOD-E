import React from 'react';
import { View, StyleSheet,TouchableOpacity,Text } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Feather from '@expo/vector-icons/Feather';
import colors from '../config/colors';


function AppNavigator() {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
  tabBarShowLabel:false,
  tabBarActiveTintColor:colors.primary,
  tabBarInactiveTintColor:colors.dark,
  tabBarStyle:{
    backgroundColor:colors.light,
    borderTopWidth:0,
    
    
    
  }
  
    }}>
        <Tab.Screen
         name={"Home"}
         component={Home}
         options={({navigation})=>({
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
         component={Home}
         options={({navigation})=>({
          headerShown:false,
             tabBarIcon:({size,color})=>
             <Feather size={size} name="shopping-bag" color={colors.dark}/>
            
             
         })}

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
         name={"Account"}
         component={Home}
         options={({navigation})=>({
            headerShown:false,
             tabBarIcon:({size,color})=>
             <Feather size={size} name="user" color={colors.dark}/>
            
             
         })}

        />






        

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default AppNavigator;