import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import colors from '../config/colors';
import AppIcon from './AppIcon';
import AppText from './AppText';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

function BottomSheetListItem({onPress,icon,color,children}) {
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
      <View style={styles.icon}>
      <AppIcon icon={icon} color={color} style={{alignSelf:"center"}}/>
      </View>
      <AppText style={styles.title} children={children}/>
    </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  list: {
    flexDirection:"row",
    marginBottom:15,
    marginTop:15,
    justifyContent:"center"

  },
  title:{
    flex:1,
    fontWeight: "500",
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    lineHeight:21,
    color:colors.dark,
    marginLeft:20,
    alignSelf:"center"
  },
  icon:{
backgroundColor:colors.gray,
width:35,
height:35,
justifyContent:"center",
borderRadius:40,
marginLeft:25

  }
});

export default BottomSheetListItem;