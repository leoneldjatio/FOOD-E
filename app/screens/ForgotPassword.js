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
import KeyBoardAvoidWrapper from '../component/KeyBoardAvoidWrapper';

function ForgotPassword(props) {
    const validationSchema=Yup
    .object()
    .shape({
    
     email:Yup
     .string()
     .email('Please enter valid email')
     .required()
     .label('Email'),
    });

    const {t} =useTranslation();
  return (
  
    <>
    <Screen style={{padding:25,backgroundColor:colors.white}}>
       <AppFormCaption caption={t('forgot_password')}/>
       <AppText children={t("forgp_forgot_password_reset")} style={{color:colors.gray,marginTop:10}}/>
    
       <KeyBoardAvoidWrapper>
    <View style={{justifyContent:"start",flex:1,paddingTop:150}}>   
     <AppForm  
        initialValues={{email:""}}
        onSubmit={(values)=>console.log(values)}
        validationSchema ={validationSchema}
     >
      
         

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              name="email" 
              label={t('reg_email')}
              placeholder="Email"/>

      
         <SubmitButton submitLabel={t('send_mail')}/>
        
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

export default ForgotPassword;