import React from 'react';
import { View, StyleSheet,ScrollView,TouchableWithoutFeedback,Keyboard,KeyboardAvoidingView } from 'react-native';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import AppForm from '../component/forms/AppForm';
import Screen from '../component/Screen';
import AppFormField from '../component/forms/AppFormField';
import SubmitButton from '../component/forms/SubmitButton';
import AppText from '../component/AppText';
import colors from '../config/colors';
import AppFormCaption from '../component/forms/AppFormCaption';
import { useTogglePasswordVisibility } from '../Hooks/useTogglePasswordVisibility';
import KeyBoardAvoidWrapper from '../component/KeyBoardAvoidWrapper';



function Register({navigation}) {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const {passwordVisibility,rightIcon,handlePasswordVisibility}=useTogglePasswordVisibility();
    const validationSchema=Yup
    .object()
    .shape({
     name:Yup
     .string()
     .matches(/(\w.+\s).+/, 'Enter at least 2 names')
     .required()
     .label('Full name'),
     email:Yup
     .string()
     .email('Please enter valid email')
     .required()
     .label('Email'),
     phone:Yup
     .string()
     .matches(phoneRegExp,'Phone number is not valid')
     .required()
     .label('Phone number'),
     password:Yup
     .string()
     .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
     .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
     .matches(/\d/, "Password must have a number")
     .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
     .min(8, ({ min }) => `Password must be at least ${min} characters`)
     .required()
     .label('Password')
    });

    const {t} =useTranslation();
  return (
  
    <>
    <Screen style={{padding:25,backgroundColor:colors.white}}>
      
       <AppFormCaption style={{flex:1}} caption={t('register')}/>
       
       <KeyBoardAvoidWrapper>
    <View style={{justifyContent:"flex-end",flex:1}}>   
     <AppForm  
        initialValues={{name:"",email:"",phone:"",password:""}}
        onSubmit={(values)=>console.log(values)}
        validationSchema ={validationSchema}
     >
      
         <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
              keyboardType="default"
              textContentType="name"
              name="name" 
              label={t('reg_name')}
              placeholder="Name"/>

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              name="email" 
              label={t('reg_email')}
              placeholder="Email"/>

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
              keyboardType="phone-pad"
              name="phone" 
              label={t('reg_phone')}
              placeholder="00 123 456 7890"/>

        <AppFormField
         autoCapitalize="none"
         autoCorrect={false}  
          name="password"
          secureTextEntry={passwordVisibility}
          secondIcon={rightIcon}
          onPress={handlePasswordVisibility}
          icon="eye"
          textContentType="password"
          label={t('reg_password')}
          placeholder="Password"/>

      
         <SubmitButton submitLabel={t('register')}/>
        
    </AppForm>
     <View style={{flexDirection:"row",justifyContent:"center",marginTop:20}}>
         <AppText style={{color:colors.gray}} children={t('reg_already')}/>
         <AppText style={{color:colors.secondary,marginLeft:3}} onPress={()=>navigation.navigate('login')} children={t('reg_login')}/>
     </View>
     </View>
     </KeyBoardAvoidWrapper>
    </Screen>    
    </>
  
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default Register;