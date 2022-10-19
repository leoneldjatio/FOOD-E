import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';
import store from './app/redux/store';
import { Provider, ReactReduxContext, useSelector } from 'react-redux';
import Card from './app/component/Card';
import Screen from './app/component/Screen';
import colors from './app/config/colors';
import { View, StyleSheet,ScrollView } from 'react-native';
import Logo from './app/component/Logo';
import Coupon from './app/component/Coupon';
import AppIcon from './app/component/AppIcon';
import Home from './app/screens/Home';
import ResendEmailVerification from './app/screens/ResendEmailVerification';
import OnBoardingOne from './app/screens/OnBoardingOne';
import Register from './app/screens/Register';
import AuthContext from './app/auth/context';
import authstorage from './app/auth/storage';
import Imagestorage from './app/auth/profilePictureStorage';
import AppLoading from 'expo-app-loading';
import ListItems from './app/component/ListItems';
import Account from './app/screens/Account';
import FoodDetails from './app/screens/FoodDetails';
import CarouselItem from './app/component/CarouselItem';
import Carousel from './app/component/Carousel';
import BasketCard from './app/component/BasketCard';
import Checkout from './app/screens/Checkout';



export default function App() {
  //const token = useSelector(state => state.userReducer.authToken)
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState();
  const [itemCount, setItemCount]=useState(1)
  const[userProfilePicture, setUserProfilePicture]=useState();
  

  const restoreUser = async()=>{
    const user = await authstorage.getUser();
    if(user) console.log(user); setUser(user);
    
  }

  const restoreProfilePic = async()=>{
    const image = await Imagestorage.getProfilePic();
    if(image) setUserProfilePicture(image);
  }

  useEffect(()=>{
    restoreProfilePic();
  },[])

    if(!isReady){
      
     return( 
     <AppLoading 
     startAsync={restoreUser} 
     onFinish={()=>setIsReady(true)}
     onError={console.warn}
     />
     ); }
 
  return (
    <Provider store={store}>
   <AuthContext.Provider value={{user,setUser,userProfilePicture, setUserProfilePicture,itemCount, setItemCount}}>
    <NavigationContainer>
   {user?<AppNavigator/>
    :<AuthNavigator/>}
   </NavigationContainer>
    </AuthContext.Provider>
    </Provider>
  

  );
  
}



