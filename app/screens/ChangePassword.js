import React from 'react';
import { View, StyleSheet} from 'react-native';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import AppForm from '../component/forms/AppForm';
import Screen from '../component/Screen';
import AppFormField from '../component/forms/AppFormField';
import SubmitButton from '../component/forms/SubmitButton';
import colors from '../config/colors';
import AppFormCaption from '../component/forms/AppFormCaption';
import { useTogglePasswordVisibility } from '../Hooks/useTogglePasswordVisibility';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

function ChangePassword(props) {
    const {t} =useTranslation();
    const {passwordVisibility,rightIcon,handlePasswordVisibility}=useTogglePasswordVisibility();
    const validationSchema=Yup
    .object()
    .shape({
        oldpassword:Yup
        .string()
        .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
        .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
        .matches(/\d/, "Password must have a number")
        .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required()
        .label('Password'),   
    
     password:Yup
     .string()
     .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
     .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
     .matches(/\d/, "Password must have a number")
     .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
     .min(8, ({ min }) => `Password must be at least ${min} characters`)
     .required()
     .label('Password'),

     confirmPassword: Yup
    .string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),

    });

  return (
    <Screen style={{paddingLeft:25,paddingRight:25,backgroundColor:colors.white}}>
        <KeyboardAwareScrollView 
        showsVerticalScrollIndicator ={false}>
            <AppFormCaption  caption={t('change_password')}/>   
        <View style={styles.container}>
                
            <AppForm  
        initialValues={{password:"",confirmPassword:"", oldpassword:""}}
        onSubmit={(values)=>console.log(values)}
        validationSchema ={validationSchema}
         >
            <AppFormField
         autoCapitalize="none"
         autoCorrect={false}  
          name="oldpassword"
          secureTextEntry={passwordVisibility}
          secondIcon={rightIcon}
          onPress={handlePasswordVisibility}
          icon="eye"
          textContentType="password"
          label={t('change_old_password')}
          placeholder="Old Password"/>

      <AppFormField
         autoCapitalize="none"
         autoCorrect={false}  
          name="password"
          secureTextEntry={passwordVisibility}
          secondIcon={rightIcon}
          onPress={handlePasswordVisibility}
          icon="eye"
          textContentType="password"
          label={t('reg_new_password')}
          placeholder="New Password"/>

        <AppFormField
         autoCapitalize="none"
         autoCorrect={false}  
          name="confirmPassword"
          secureTextEntry={passwordVisibility}
          secondIcon={rightIcon}
          onPress={handlePasswordVisibility}
          icon="eye"
          textContentType="password"
          label={t('reg_confirm_password')}
          placeholder="Confirm Password"/>

         <SubmitButton  submitLabel={t('change_password')}/>
        </AppForm>
        </View>   
        </KeyboardAwareScrollView> 
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:253,
    
    
  }
});

export default ChangePassword;