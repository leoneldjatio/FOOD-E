import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import AppButton from '../component/AppButton';
import AppText from '../component/AppText';
import colors from '../config/colors';
import { useTranslation } from 'react-i18next';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';


const image = require('../assets/images/onboarding_one.png');

function OnBoardingOne({navigation}) {

  const {t} =useTranslation();

  let [fontsLoaded] = useFonts({
    Poppins_400Regular, BebasNeue_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }


  return (

    <ImageBackground style={styles.background} source={image} blurRadius={0}>
      <View style={{ flexDirection: "row", justifyContent: "flex-start", flex: 1, marginTop: 40, }}>
        <AppText style={styles.text6} children="FOOD-"/>
        <AppText style={styles.text7} children="E"/>
      </View>
      <View style={{ justifyContent: "flex-end", alignItems: "baseline", flex: 1, }}>
        <AppText style={styles.text1} children={t('onb1_awesome')}/>
        <View style={styles.text4}>
          <AppText style={styles.text2} children={t('onb1_local')}/>
          <AppText style={styles.text3} children={t('onb1_food')}/>
        </View>
        <AppText style={styles.text} children={t('onb1_description_one')}/>
        <AppText style={styles.text5} children={t('onb1_description_two')}/>
        <AppButton style={styles.button} onPress={()=>navigation.navigate('second')} title={t('next')} backColor="primary" textColor="white"/>
      </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({

  text: {
    color: colors.white,
    fontWeight: "500",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },
  text1: {
    color: colors.white,
    fontWeight: "400",
    fontFamily: 'BebasNeue_400Regular',
    lineHeight: 43,
    fontSize: 36,
  },
  text2: {
    color: colors.primary_dark,
    fontWeight: "400",
    fontSize: 36,
    lineHeight: 43,
    fontFamily: "BebasNeue_400Regular",
  },
  text3: {
    color: colors.white,
    fontWeight: "400",
    fontSize: 36,
    lineHeight: 43,
    fontFamily: "BebasNeue_400Regular",
    marginBottom: 10,
    paddingLeft: 5,
  },
  text4: {
    flexDirection: "row",
    marginBottom: 5,
  },
  text5: {
    color: colors.white,
    fontWeight: "500",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    marginBottom: 55,
  },
  text6: {
    color: colors.white,
    fontWeight: "400",
    fontFamily: 'BebasNeue_400Regular',
    lineHeight: 22,
    fontSize: 18,
  },
  text7: {
    color: colors.primary,
    fontWeight: "400",
    fontFamily: 'BebasNeue_400Regular',
    lineHeight: 22,
    fontSize: 18,
  },
  background: {
    flex: 1,
    flexDirection: "column",
    padding: 25,
  },
  button: {
    marginBottom: 30,
    borderColor:colors.primary,
  }
});

export default OnBoardingOne;