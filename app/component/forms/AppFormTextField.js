import React from 'react';
import { View, StyleSheet } from 'react-native';
import ErrorMessage from '../../component/forms/ErrorMessage';
import {useFormikContext} from 'formik';
import colors from '../../config/colors';
import Label from '../../component/forms/Label';
import {useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import {Poppins_400Regular } from '@expo-google-fonts/poppins';
import AppText from '../AppText';

function AppFormTextField({name,width,label,currency,...otherProps}) {
    const {setFieldValue, values,setFieldTouched,handleChange,errors,touched}=useFormikContext();
    let [fontsLoaded] = useFonts({
        Poppins_400Regular, BebasNeue_400Regular,
      });
      if (!fontsLoaded) {
        return null;
      }
  return (
    <View style={styles.container}>
    <Label label={label} style={styles.label}/>
   <View style={styles.text}>
   <AppText
   style={styles.price}
   width={width}
   value={values}
   {...otherProps}
   
  />
  <AppText style={styles.currency} children={currency}/>
    </View> 
  
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginBottom:10,
    },
    label:{
        color:colors.dark,
        alignSelf:"flex-end",
        fontFamily:"BebasNeue_400Regular",
        fontSize:15,
        
    },
    text:{
        flexDirection:"row",
        alignItems:"center",
        marginLeft:6,
        marginTop:25
    },
    currency:{
        marginLeft:5,
        color:colors.primary,
        fontFamily:"BebasNeue_400Regular",
        fontSize:24,
    },
    price:{
        color:colors.primary,
        fontFamily:"BebasNeue_400Regular",
        fontSize:24, 
    }
});

export default AppFormTextField;