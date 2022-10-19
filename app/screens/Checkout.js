import React,{useEffect,useState} from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppFormCaption from '../component/forms/AppFormCaption';
import Screen from '../component/Screen';
import colors from '../config/colors';
import { useTranslation } from 'react-i18next';
import BasketCard from '../component/BasketCard';
import AppText from '../component/AppText';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import NonFormikSubmitButton from '../component/forms/NonFormikSubmitButton';
import addToCartStorage from '../auth/addToCartStorage';
import {connect} from 'react-redux'; 


function Checkout(props) {
    const {t} =useTranslation(); 
    const [mealDetails, setmealDetails]=useState();
    const restoreMealDetails= async()=>{
      const storedMealDetails= await addToCartStorage.getMealToCart();
      const meal=JSON.parse(storedMealDetails);
      if(meal)  setmealDetails(meal);
    }
    
    useEffect(()=>{
    restoreMealDetails();
    },[]);

    let [fontsLoaded] = useFonts({
      Poppins_400Regular, BebasNeue_400Regular,
  });
  if (!fontsLoaded) {
      return null;
  }
 // console.log(mealDetails.cu);
  return (
    <Screen style={{paddingLeft:25,paddingRight:25,backgroundColor:colors.white}}>
   <ScrollView>
   <View style={{flex:1}}>
  <AppFormCaption caption={t('basket')}/>
  
  <BasketCard style={{marginTop:30}}
  imageUrl={require('../database/images/livers1.jpg')}
  title="Egg Salad"
  price="5.00"
  quantity="2"
  currency="XAF"
  />
  <View style={{flex: 1,justifyContent: 'flex-end',marginBottom: 36}}>
  <AppText style={styles.title} children={t('total')}/>
  <View style={{flexDirection:"row"}}>
  <AppText style={styles.price} children="65.00"/>
  <AppText style={styles.currency} children="XAF"/>
  </View>
  <NonFormikSubmitButton submitLabel={t('proceed_to_checkout')} onPress={console.log('me')}/>
  </View>
  </View>
   </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title:{
    color:colors.dark,
    lineHeight: 22,
    fontSize: 18,
    fontWeight: "400",
    fontFamily: "BebasNeue_400Regular",
    marginBottom:5
  },
  price:{
    color:colors.secondary,
    lineHeight: 43,
    fontSize: 36,
    fontWeight: "400",
    fontFamily: "BebasNeue_400Regular"
  },
  currency:{
    color:colors.secondary,
    lineHeight: 43,
    fontSize: 36,
    fontWeight: "400",
    fontFamily: "BebasNeue_400Regular",
    marginLeft:5
  }
});

const mapStateToProps=(state)=>{
  return {
    cartItems: state
  }
}

export default connect(mapStateToProps)(Checkout);