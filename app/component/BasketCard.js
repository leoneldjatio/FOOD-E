import React from 'react';
import { View, StyleSheet,Image, TouchableOpacity} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import AppText from './AppText';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import colors from '../config/colors';
import Screen from './Screen';



function BasketCard({onPress,chevronPress,imageUrl,title,price,currency,quantity,style}) {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular, BebasNeue_400Regular,
    });
    if (!fontsLoaded) {
        return null;
    }
  return (
   <View style={[styles.container,style]}>
    <Image source={imageUrl} style={styles.image} />
    <View style={{flex:1}}>
    <View style={{flexDirection:"row",marginLeft:20}}>
        <AppText style={styles.title} children={title}/>
        <TouchableOpacity onPress={onPress} style={{ backgroundColor: colors.error, borderRadius: 5}}>
        <Feather size={20} name="trash-2" style={styles.icon} color={colors.error}/>
        </TouchableOpacity>
        
    </View>
    <View style={{flexDirection:"row",marginLeft:20}}>
    <View style={{flexDirection:"row",marginTop:40,flex:1}}>   
        <AppText style={styles.price} children={price}/>
        <AppText style={styles.currency} children={currency}/>
        </View>
        <View style={{marginTop:40,flexDirection:"row"}} >
         <AppText style={styles.quantity} children={quantity}/>
         <Feather name="chevron-down" style={{marginLeft:15,marginTop:2,marginRight:5}} size={15} color={colors.dark} onPress={chevronPress}/>
        </View>
    </View>
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    marginBottom:50,
  },
  image:{
    width:100,
    height:100,
    borderRadius:10
  },
  title:{
    lineHeight: 21,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Poppins_400Regular",
    marginTop:2,
    flex:1
  },
  price:{
    color:colors.primary,
    lineHeight: 29,
    fontSize: 24,
    fontWeight: "400",
    fontFamily: "BebasNeue_400Regular"
  },
  currency:{
    color: colors.primary,
    lineHeight: 29,
    fontSize: 24,
    fontWeight: "400",
    fontFamily: "BebasNeue_400Regular",
    marginLeft:5
  },
  icon:{
    color: colors.white,
    padding: 4,
  },
  quantity:{
    lineHeight: 21,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Poppins_400Regular",
  }


});

export default BasketCard;