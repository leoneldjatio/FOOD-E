import React,{useState} from 'react';
import { View, StyleSheet} from 'react-native';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import AppForm from '../component/forms/AppForm';
import Screen from '../component/Screen';
import AppFormField from '../component/forms/AppFormField';
import SubmitButton from '../component/forms/SubmitButton';
import colors from '../config/colors';
import AppFormCaption from '../component/forms/AppFormCaption';
import userApi from '../api/users';
import { useTogglePasswordVisibility } from '../Hooks/useTogglePasswordVisibility';
import KeyBoardAvoidWrapper from '../component/KeyBoardAvoidWrapper';
import ActivityIndicator from '../component/ActivityIndicator';
import { use } from 'i18next';
import ErrorMessage from '../component/forms/ErrorMessage';

function ResetPassword({navigation}) {
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError]=useState();
    const[resetPasswordFailed, setResetPasswordFailed] = useState(false);
    const {t} =useTranslation();
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

    passwordResetCode: Yup
    .string()
    .min(8, ({min})=> `Password reset code is at least ${min} characters`)
    .required('Password reset code is required')
    });

    const handleSubmit=async (values)=>{
         setIsLoading(true);
       const result = await userApi.resetPassword(values);
         setIsLoading(false);
         if(!result.ok){
          setError(result.data.message);
          return setResetPasswordFailed(true);
         }else{
          setResetPasswordFailed(false);
          navigation.navigate('login');
         }

    }
    
  return (
  
    <>
    <ActivityIndicator visible={isLoading}/>
    <Screen style={{padding:25,backgroundColor:colors.white}}>
       <AppFormCaption  caption={t('reset_password')}/>
       <KeyBoardAvoidWrapper>
    <View style={{justifyContent:"flex-end",flex:1,marginTop:80}}>   
     <AppForm  
        initialValues={{password:"",confirmPassword:"", passwordResetCode:""}}
        onSubmit={handleSubmit}
        validationSchema ={validationSchema}
     >
      
    <ErrorMessage visible={resetPasswordFailed} error={error}/>
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

           <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
              keyboardType="default"
              textContentType="none"
              name="passwordResetCode" 
              label={t('pass_reset_code')}
              placeholder="Password Reset Code"/>

      
         <SubmitButton  submitLabel={t('reset_password')}/>
        
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