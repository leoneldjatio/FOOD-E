import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppTextInput from '../../component/AppTextInput';
import ErrorMessage from '../../component/forms/ErrorMessage';
import {useFormikContext} from 'formik';
import colors from '../../config/colors';
import Label from '../../component/forms/Label';
import {useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import {Poppins_400Regular } from '@expo-google-fonts/poppins';

function AppFormField({name,width,label,...otherProps}) {
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
    <AppTextInput
     width={width}
     onBlur={()=>setFieldTouched(name)}
     value ={values[name]}
     {...otherProps}
     error={errors[name]}
     visible={touched[name]}
     onChangeText ={text=>setFieldValue(name,text)}
    />
    <ErrorMessage error={errors[name]} visible={touched[name]}/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      marginBottom:10,
  },
  label:{
      color:colors.primary,
      paddingLeft:20,
      fontFamily:"BebasNeue_400Regular",
      fontSize:15,
      
  },
  
});

export default AppFormField;