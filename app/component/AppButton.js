import React from 'react';
import { StyleSheet,Text,TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import { useFonts,BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';

function AppButton ({title,onPress,backColor,style,textColor,borderColor}){

    let [fontsLoaded] = useFonts({
         BebasNeue_400Regular,
      });
      if (!fontsLoaded) {
        return null;
      }

    return(
      <TouchableOpacity style={[styles.button, {backgroundColor:colors[backColor]},style]} onPress={onPress}>
          <Text style={[styles.text,{color:colors[textColor]}]}>{title}</Text>
      </TouchableOpacity> 
      
    );
}
const styles = StyleSheet.create({
    button:{
     backgroundColor:colors.primary,
     borderRadius:30,
     justifyContent:"center",
     alignItems:"center",
     marginBottom:15,
     padding:10,
     width:"100%",
     borderWidth:2,
    },
    text:{
     textTransform:"uppercase",
     fontSize:18,
     fontWeight:"bold",
     fontFamily:"BebasNeue_400Regular",
     lineHeight:22,
     fontSize:18, 
       
    }
});

export default AppButton;