import React,{useRef,useEffect, useState,useContext} from 'react';
import { StyleSheet, Image, TouchableHighlight,View, ScrollView, TouchableOpacity,Alert} from 'react-native';
import { useTranslation } from 'react-i18next';
import colors from '../config/colors';
import AppFormCaption from '../component/forms/AppFormCaption';
import Screen from '../component/Screen';
import Feather from '@expo/vector-icons/Feather';
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheetListItem from '../component/BottomSheetListItem';
import * as ImagePicker from 'expo-image-picker';
import useAuth from '../auth/useAuth';
import AuthContext from '../auth/context';
import * as Yup from 'yup';
import AppForm from '../component/forms/AppForm';
import ErrorMessage from '../component/forms/ErrorMessage';
import AppFormField from '../component/forms/AppFormField';
import SubmitButton from '../component/forms/SubmitButton';
import ListItems from '../component/ListItems';
import AppIcon from '../component/AppIcon';
import AppText from '../component/AppText';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';



function AccountAndProfile({navigation}) {
  const {t} =useTranslation();
  const refRBSheet=useRef();
  const {user} = useAuth();
  const userId = user.userId;
  const {userProfilePicture} = useContext(AuthContext);
  //const[, setUserProfilePicture]=useState();

  /*const profileImage = async ()=>{
    const result =  await userApi.getUserProfilePicture({userId});
    setUserProfilePicture(result.data);
  } 
  console.log(userProfilePicture);*/

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
     .label('Email'),});
     

  const selectImage = async ()=>{
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality:0.5
      });
      if(!result.cancelled){

        const image = (result.uri);
        const ImageProp=image.split('/')[14];
        const type = ImageProp.split('.')[1];
        const name =ImageProp.split('.')[0]

        navigation.navigate('Preview Profile Picture',{image,type,name});
      }
    }
    catch (error) {
      console.log('Eror reading an image',error);
    }}; 
  
    const requestPermission = async () =>{
      const result =  ImagePicker.requestMediaLibraryPermissionsAsync();
      if(result.granted == false){
      alert('Please enable permission');
      return;
      }}
  
    useEffect( () => {
       requestPermission();
       //profileImage();
    },[])  
    
    let [fontsLoaded] = useFonts({
      Poppins_400Regular, BebasNeue_400Regular,
    });
    if (!fontsLoaded) {
      return null;
    }
  return (
    
    <Screen style={{paddingLeft:25,paddingRight:25,backgroundColor:colors.white}}>
      <KeyboardAwareScrollView 
       showsVerticalScrollIndicator ={false}
      >
         <AppFormCaption style={styles.caption} caption={t('account_and_profile')}/>
         
         <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        closeDuration={300}
        openDuration={400}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',  
          },
          container:{
            borderTopLeftRadius:15,
            borderTopRightRadius:15,
            height:230,
            
           
            
          },
          draggableIcon: {
            backgroundColor:colors.dark
          }
        }}
      >
      
        <BottomSheetListItem
        children="Select Profile Picture"
        color="white"
        icon="image"
        onPress={selectImage}
        />
        <BottomSheetListItem
        children="Open Camera"
        color="white"
        icon="camera"
        onPress={()=>console.log()}
        />
      
      </RBSheet>

      <View style={{justifyContent:"flex-end"}}> 
      <TouchableOpacity onPress={()=>Alert.alert("Delete Account","Are you sure you want to delete this user account?",[{text:"Yes",onPress:()=>console.log('Yes')},
      {text:"No",onPress:()=>console.log('No')}])} style={{flexDirection:"row",marginBottom:30,marginTop:30}}>
          <AppIcon icon="trash-2" color="error"/>
          <AppText children="Delete Account" style={styles.text}/>
        </TouchableOpacity>
      <View style={{marginBottom:20}}>
         <Image style={styles.image} source ={{uri:userProfilePicture}}/>
         <TouchableHighlight
         style={styles.icon}
         activeOpacity={1}
           underlayColor={colors.gray}
           onPress={()=>refRBSheet.current.open()}
         >
          <Feather style={{alignSelf:"center"}} size={15} name="camera" color={colors.dark}/>
         </TouchableHighlight>
         </View>  
       <AppForm  
          enableReinitialize={true}
          initialValues={{name:"",email:""}}
          onSubmit={(values)=>console.log(values)}
          validationSchema ={validationSchema}
       >
        <ErrorMessage visible={console.log()} error={console.log()}/>
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

             <ListItems
             children="Change Password"
             onPress={()=>navigation.navigate("Change Password") }
             icon="lock"
             color="primary"/>
             
 

         <SubmitButton submitLabel={t('update')}/>
         
        </AppForm>
        
        </View>
        </KeyboardAwareScrollView>
     </Screen>
    
  );
}

const styles = StyleSheet.create({
  caption: {
    justifyContent:"flex-start",
   
  },
  image:{
    width:200,
    height:200,
    alignSelf:"center",
    borderColor:colors.primary,
    borderWidth:3,
    borderRadius:100
  },
  icon:{
    borderWidth:2,
    borderColor:colors.primary,
    borderRadius:20,
    justifyContent:"center",
    width:40,
    height:40,
    position:"absolute",
    top:155,
    right:105,
    backgroundColor:colors.white  
  },
  text:{
    fontFamily:"Poppins_400Regular",
    fontWeight:"500",
    fontSize:16,
    paddingLeft:20,
    color:colors.error,

  }
});

export default AccountAndProfile;