import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import colors from '../config/colors';
import AppIcon from './AppIcon';
import AppText from './AppText';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

function ListItems({onPress,icon,color,children}) {
  
  let [fontsLoaded] = useFonts({
      Poppins_400Regular,
    });
    if (!fontsLoaded) {
      return null;
    }
  return (
    <TouchableHighlight
     underlayColor={colors.light}
     onPress={onPress}
    >
    <View style={styles.list}>
      <AppIcon icon={icon} color={color}/>
      <AppText style={styles.title} children={children}/>
      <AppIcon icon="chevron-right" color="dark"/>
    </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  list: {
    flexDirection:"row",
    marginBottom:15,
    marginTop:15

  },
  title:{
    flex:1,
    fontWeight: "500",
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    lineHeight:21,
    color:colors.dark,
    marginLeft:20
  }
});

export default ListItems;