import React, { useEffect, useState } from 'react';
import { View, StyleSheet,ActivityIndicator  } from 'react-native';
import AppFormCaption from '../component/forms/AppFormCaption';
import AppText from '../component/AppText';
import Screen from '../component/Screen';
import { useTranslation } from 'react-i18next';
import AppButton from '../component/AppButton';
import colors from '../config/colors';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import {BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import userApi from '../api/users/';


function ResendEmailVerification({navigation, route}) {
    
    const [resendingEmail,setResendingEmail] = useState(false);
    const [resendStatus,setResenStatus] = useState('Resend');
    const [targetTime,setTargetTime]=useState(null);
    const [timeLeft,setTimeLeft] = useState(null); 
    const [activeResend,setActiveResend] = useState(false);
    const [verified,setVerified] = useState(false);
    
    const {email,userId} = route?.params;
    

    let resendTimeInterval;
    const calculateTimeLeft=(finalTime)=>{
      const difference = finalTime- +new Date();
      if(difference>=0){
          setTimeLeft(Math.round(difference/1000));
      }else{
          setTimeLeft(null);
          clearInterval(resendTimeInterval);
          setActiveResend(true);
      }
    }; 

    const triggerTimer =(targetTimeInSeconds = 30)=>{
      setTargetTime(targetTimeInSeconds);
      setActiveResend(false);
      const finalTime=+new Date() + targetTimeInSeconds*1000;
      resendTimeInterval= setInterval(()=>{
          calculateTimeLeft(finalTime),1000
      });
    }
    

    useEffect(()=>{
        triggerTimer();
        return ()=>{
           clearInterval(resendTimeInterval);
        };
    },[]);

    const {t} =useTranslation();
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,BebasNeue_400Regular,
      });
      if (!fontsLoaded) {
        return null;
      }


    
      const ResendverificationMail =async ()=>{
        const user = route?.params;
         setResendingEmail(true);
      const result = await userApi.resendVerificationMail({email:user.email, userId:user.userId, name:user.name});
         setResendingEmail(false);
         if(result.data.status==="VERIFIED"){
           setVerified(true);
         }else{
          setVerified(false);
         }
         
         setTimeout(()=>{
          setActiveResend(false);
          triggerTimer();
         }, 2000);
      }
  return (
    <Screen style={{padding:25,backgroundColor:colors.white}}>
        <AppFormCaption  caption={t('email_sent')}/>
        {!verified?
       <AppText children={`We've sent you an email at ${email} for verification. Check your email for the verification link.`} style={styles.text1}/>
       :<AppText style={styles.text5} children={t("resend_verified")} />
        }
      <View style={{flex:1,justifyContent:"flex-end"}}>
        {!verified?<>
      {!activeResend && <AppText style={styles.text3} children={`00:`+timeLeft||targetTime} />}
      <AppText style={styles.text} children={t("did_not_receive_email")}/> 
         {!resendingEmail? 
      (!activeResend ?<AppText style={styles.text4} children={t("resend")} />:<AppText style={styles.text2} children={t("resend")} onPress={ResendverificationMail} />)
      :<ActivityIndicator style={styles.indicator} color={colors.primary}/> 
      }</>:<></>}
     <AppButton style={styles.button} title={t("resend_verification")} onPress={()=>navigation.navigate('login',{email})} backColor="primary" textColor="white"/>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
    button: {
        marginBottom: 30,
        borderColor:colors.primary,
      },
      text:{
        color: colors.dark,
        fontWeight: "500",
        fontSize: 14,
        fontFamily: "Poppins_400Regular",
        marginBottom:5,
        lineHeight:21, 
      },
      text1:{
        color:colors.gray,
        marginTop:10,
        fontWeight: "500",
        fontSize: 14,
        fontFamily: "Poppins_400Regular",
        lineHeight:21,
        
      },
      text2:{
        color:colors.primary,
        marginTop:10,
        fontWeight: "500",
        fontSize: 14,
        fontFamily: "Poppins_400Regular",
        lineHeight:21,
        marginBottom:55,
      },
      text3:{
        color:colors.secondary,
        marginTop:10,
        fontWeight: "400",
        fontSize: 18,
        fontFamily: "BebasNeue_400Regular",
        lineHeight:22,
        marginBottom:40,
      },
      text4:{
        color:colors.gray,
        marginTop:10,
        fontWeight: "500",
        fontSize: 14,
        fontFamily: "Poppins_400Regular",
        lineHeight:21,
        marginBottom:55,
      },
      text5:{
        color:colors.gray,
        marginTop:10,
        fontWeight: "500",
        fontSize: 14,
        fontFamily: "Poppins_400Regular",
        lineHeight:21,
        marginBottom:55,
      },
      indicator:{
        marginTop:10,
        lineHeight:21,
        marginBottom:55
      }
});

export default ResendEmailVerification;