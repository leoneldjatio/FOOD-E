import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import colors from '../config/colors';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';

function Coupon({ titleBegin, titleMiddle, titleEnd, subTitle, couponCode, imageUrl}) {
  let [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={[styles.container]}>
      <Image style={styles.Image} source={imageUrl} />
      <View style={{ flexDirection: "row", paddingLeft: 20, paddingTop: 20 }}>
        <Text style={styles.titleBegin}>{titleBegin}</Text>
        <Text style={styles.titleMiddle}>{titleMiddle}</Text>
        <Text style={styles.titleEnd}>{titleEnd}</Text>
      </View>
      <View style={{ paddingLeft: 20, paddingTop: 20 }}>
        <Text style={styles.subTitle}>{subTitle}</Text>
        <Text style={styles.couponCode}>{couponCode}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 15,
    width: "100%",


  },
  titleBegin: {
    fontSize: 24,
    fontFamily: "BebasNeue_400Regular",
    fontWeight: "400",
    lineHeight: 28.8,
    color: colors.white,
    padding: 5


  },
  titleMiddle: {
    fontSize: 35,
    fontFamily: "BebasNeue_400Regular",
    fontWeight: "400",
    lineHeight: 28.8,
    color: colors.dark,
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 8

  },
  titleEnd: {
    fontSize: 24,
    fontFamily: "BebasNeue_400Regular",
    fontWeight: "400",
    lineHeight: 28.8,
    color: colors.white,
    padding: 5
  },
  subTitle: {
    fontSize: 12,
    fontFamily: "BebasNeue_400Regular",
    fontWeight: "400",
    lineHeight: 14.4,
    color: colors.white,
    padding: 5
  },
  couponCode: {
    fontSize: 36,
    fontFamily: "BebasNeue_400Regular",
    fontWeight: "400",
    lineHeight: 43.2,
    color: colors.dark,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 20

  },
  Image: {
    position: "absolute",
    height: 150,
    width: 235,
    right: 0,
    top: 20,
  }
});

export default Coupon;