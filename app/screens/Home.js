import React,{useRef} from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppIcon from '../component/AppIcon';
import AppText from '../component/AppText';
import Screen from '../component/Screen';
import colors from '../config/colors';
import { useTranslation } from 'react-i18next';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import Card from '../component/Card';
import Coupon from '../component/Coupon';
import Logo from '../component/Logo';


function Home(props) {
    const {t} =useTranslation();
    const scrollView = useRef();

    let [fontsLoaded] = useFonts({
      Poppins_400Regular, BebasNeue_400Regular,
    });
    if (!fontsLoaded) {
      return null;
    }
  return (
    <Screen style={{ backgroundColor: colors.light,padding:25}}>
        <View style={{flexDirection:"row"}}>
            <AppText style={styles.title_one} children="Hello,"/>
            <AppText style={styles.title_two} children=" John"/>
            <AppText style={styles.title_three} children="!"/>
            <AppText style={styles.title_four} children="HOME"/>
            <AppIcon   icon="map-pin" color="secondary"/>
        </View>
    <View style={{paddingTop:40,paddingBottom:40}}>
        <Coupon 
        imageUrl={require('../assets/images/hand.png')}
        titleBegin="GET" 
        titleMiddle="50%" 
        titleEnd="AS A JOINING BONUS"
        subTitle="USE CODE ON CHECKOUT"
        couponCode="NEW50"
        />
     </View>  

     <AppText style={styles.title_five} children="RECOMMENDED FOR YOU"/> 
     
     <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
      <View style={{flexDirection:"row"}}>
      <Card 
      imageUrl={require('../assets/images/achu.jpg')} 
      likeIcon="heart" 
      title="Achu" 
      currency="XAF" 
      subtitle="1500" 
      icon="shopping-bag"/>
      <Card 
      imageUrl={require('../assets/images/salmon.jpg')} 
      likeIcon="heart" 
      title="Grilled Salmon" 
      currency="XAF" 
      subtitle="1000" 
      icon="shopping-bag"/>
      <Card 
      imageUrl={require('../assets/images/egg.jpg')} 
      likeIcon="heart" 
      title="Egg Salad" 
      currency="XAF" 
      subtitle="2500" 
      icon="shopping-bag"/>
      </View>
      </ScrollView> 
     <AppText style={styles.title_six} children="RESTAURANTS"/>
     <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
     <View style={{flexDirection:"row"}}>
         <Logo imageUrl={require('../assets/images/mac.png')}/>
         <Logo imageUrl={require('../assets/images/dominos.png')}/>
         <Logo imageUrl={require('../assets/images/burger.png')}/> 
         <Logo imageUrl={require('../assets/images/dominos.png')}/>    
     </View>
     </ScrollView>

    </Screen>
  );
}

const styles = StyleSheet.create({
  title_one:{
    fontFamily:"Poppins_400Regular",
    fontWeight:"500",
    fontSize:18,
    lineHeight:27
  },
  title_two:{
    fontFamily:"Poppins_400Regular",
    fontWeight:"500",
    fontSize:18,
    lineHeight:27,
    color:colors.primary

  },
  title_three:{
      flex:1,
      fontFamily:"Poppins_400Regular",
    fontWeight:"500",
    fontSize:18,
    lineHeight:27
  },
  title_four:{
    fontFamily:"BebasNeue_400Regular",
    fontWeight:"400",
    fontSize:12,
    lineHeight:25,
    color:colors.secondary,
    paddingRight:5
  },
  title_five:{
    fontFamily:"BebasNeue_400Regular",
    fontWeight:"400",
    fontSize:12,
    lineHeight:14.4,
    paddingBottom:20,
    
  },
  title_six:{
    fontFamily:"BebasNeue_400Regular",
    fontWeight:"400",
    fontSize:12,
    lineHeight:14.4,
    paddingBottom:10
    
  }
});

export default Home;