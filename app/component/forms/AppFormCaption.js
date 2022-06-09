import React from 'react';
import {StyleSheet } from 'react-native';
import AppText from '../AppText';
import { useFonts,BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';

function AppFormCaption({caption,style}) {
    
  let [fontsLoaded] = useFonts({
     BebasNeue_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppText children={caption} style={[styles.container,style]}/>
  );
}

const styles = StyleSheet.create({
  container: {
   
      marginTop:40,
      fontFamily:"BebasNeue_400Regular",
      fontSize:36,
      lineHeight:43,
     

     

  }
});

export default AppFormCaption;