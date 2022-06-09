import React from 'react';
import { View, StyleSheet} from 'react-native';
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

function ResetPassword(props) {
    const {passwordVisibility,rightIcon,handlePasswordVisibility}=useTogglePasswordVisibility();
    const validationSchema=Yup
    .object()
    .shape({
    
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

    const {t} =useTranslation();
  return (
  
    <>
    <Screen style={{padding:25}}>
       <AppFormCaption caption={t('reset_password')}/>
       <KeyBoardAvoidWrapper>
    <View style={{justifyContent:"flex-end",flex:1,marginTop:100}}>   
     <AppForm  
        initialValues={{password:"",confirmPassword:""}}
        onSubmit={(values)=>console.log(values)}
        validationSchema ={validationSchema}
     >
      

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
          placeholder="Password"/>

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

      
         <SubmitButton submitLabel={t('reset_password')}/>
        
    </AppForm>
     </View>
     </KeyBoardAvoidWrapper>
    </Screen>    
    </>
  
  );
}

const styles = StyleSheet.create({
  container: {}
});


export default ResetPassword;