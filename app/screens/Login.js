import React, { useContext, useState } from 'react';
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
import useApi from '../api/users';
import ErrorMessage from '../component/forms/ErrorMessage';
import { } from 'formik';
import useAuth from '../auth/useAuth';


function Login({navigation,route}) {
  const [loginFailed,setLoginFailed]=useState(false);
  const [error, setError]=useState();
  const {logIn} = useAuth();   
  const {passwordVisibility,rightIcon,handlePasswordVisibility}=useTogglePasswordVisibility();
 

      const validationSchema=Yup
      .object()
      .shape({
      
       email:Yup
       .string()
       .email('Please enter valid email')
       .required()
       .label('Email'),
      
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
      
      const handleSubmit = async (values)=>{ 
        const result = await useApi.login(values);
         if (!result.ok){
          setError(result.data.message);
          return setLoginFailed(true);
        
         }else{
         setLoginFailed(false);
         logIn(result.data);
        
        
         }
       }
     
const {t} =useTranslation();
    return (
    
      <>
      <Screen style={{padding:25,backgroundColor:colors.white}}>
         <AppFormCaption style={{flex:1}} caption={t('login')}/>
         <KeyBoardAvoidWrapper>
      <View style={{justifyContent:"flex-end",flex:1}}>   
       <AppForm  
          enableReinitialize={true}
          initialValues={{email:route?.params?.email,password:""}}
          onSubmit={handleSubmit}
          validationSchema ={validationSchema}
       >
        <ErrorMessage visible={loginFailed} error={error}/>
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
            name="password"
            secureTextEntry={passwordVisibility}
            secondIcon={rightIcon}
            onPress={handlePasswordVisibility}
            icon="eye"
            style={{marginBottom:-4}}
            textContentType="password"
            label={t('reg_password')}
            placeholder="Password"/>

            <AppText children={t("log_forgot_password")} onPress={()=>navigation.navigate('forgot password')} style={{textAlign:"right",color:colors.gray,marginBottom:30}}/>
  
        
           <SubmitButton submitLabel={t('login')}/>
          
      </AppForm>
       <View style={{flexDirection:"row",justifyContent:"center",marginTop:20}}>
           <AppText style={{color:colors.gray}} children={t('log_account')}/>
           <AppText style={{color:colors.secondary,marginLeft:3}} onPress={()=>navigation.navigate('register')} children={t('log_register')}/>
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

 

export default Login;