import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import AppButton from '../component/AppButton';
import AppText from '../component/AppText';
import colors from '../config/colors';
import Translation from '../assets/language/translation';
import { useTranslation } from 'react-i18next';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';



function GetSarted({navigation}) {

  const {t,Translation} =useTranslation();

  let [fontsLoaded] = useFonts({
    Poppins_400Regular, BebasNeue_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }


  return (

    <View style={styles.background}>
      <View style={{ flexDirection: "row", alignItems:"flex-start", marginTop: 40, }}>
        <AppText style={styles.text6} children="FOOD-" />
        <AppText style={styles.text7} children="E" />
      </View>
      <View style={{alignItems:"flex-start",marginTop:80,}}>
         <View style={styles.text4}>
          <AppText style={styles.text2} children={t('gt_get')} />
          <AppText style={styles.text3} children={t('gt_started')} />
        </View>
        <AppText style={styles.text} children={t('gt_description_one')} />
        <AppText style={styles.text5} children={t('gt_description_two')} />
        </View>
      <View style={{ justifyContent: "flex-end", alignItems: "baseline", flex: 1, }}>
        <AppButton style={styles.login} onPress={()=>navigation.navigate('login')} title={t('login')} backColor="primary" textColor="white" />
        <AppButton style={styles.register} onPress={()=>navigation.navigate('register')}  title={t('register')} color="white" textColor="primary"/>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({

  text: {
    color: colors.dark,
    fontWeight: "500",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },
  text2: {
    color: colors.dark,
    fontWeight: "400",
    fontSize: 36,
    lineHeight: 43,
    fontFamily: "BebasNeue_400Regular",
  },
  text3: {
    color: colors.primary,
    fontWeight: "400",
    fontSize: 36,
    lineHeight: 43,
    fontFamily: "BebasNeue_400Regular",
    marginBottom: 10,
    paddingLeft: 5,
    paddingRight:5,
  },
  text4: {
    flexDirection: "row",
    marginBottom: 5,
    alignItems:"baseline",
  },
  text5: {
    color: colors.dark,
    fontWeight: "500",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    marginBottom: 55,
  },
  text6: {
    color: colors.dark,
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
    backgroundColor:colors.white,
  },
  login: {
    color:colors.white,
    borderColor:colors.primary,
    marginBottom: 20,
    fontFamily: 'BebasNeue_400Regular',
  },
  register: {
    marginBottom: 30,
    color:colors.primary_dark,
    fontFamily: 'BebasNeue_400Regular',
    borderColor:colors.primary,
  }
});

export default GetSarted;