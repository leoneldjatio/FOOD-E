import React,{useContext, useState} from 'react';
import { View, StyleSheet,Image,TouchableOpacity,Text,ActivityIndicator } from 'react-native';
import Screen from '../component/Screen';
import colors from '../config/colors';
import userApi from '../api/users';
import useAuth from '../auth/useAuth';
import AuthContext from '../auth/context';
import Imagestorage from '../auth/profilePictureStorage';



function PreviewProfilePicture({route,navigation}) {
  const [isLoading,setIsLoading]=useState(false);
  const {image,type,name} = route?.params;
  const {user} = useAuth();
  const userid = user.userId;
  const profileImageContext = useContext(AuthContext);

  const handleSubmit= async ()=>{
    const imageData = new FormData();
    imageData.append('userId',userid)
    imageData.append('image',{
      name,
      uri:image,
      type
    });
    setIsLoading(true);
    const result = await userApi.uploadProfilePic(imageData);
    const userProfilePicture = result.data;
    profileImageContext.setUserProfilePicture(userProfilePicture);
    Imagestorage.storeProfilePic(result.data);
    setIsLoading(false);
    navigation.navigate('Account and Profile');
  }
  navigation.setOptions({
    headerRight:() => (
      <TouchableOpacity 
      activeOpacity={0.7}
     underlayColor={colors.light}
      onPress={handleSubmit}
      >
        {!isLoading?<Text style={{marginRight:20,
  fontSize: 17,fontFamily: "Poppins_600SemiBold",color:colors.dark}}>Save</Text>:<ActivityIndicator style={styles.indicator} color={colors.primary}/>}
      </TouchableOpacity>
      
    ),
  })
  
  return (
    <Screen style={{padding:25,backgroundColor:colors.white}}>
      <Image style={styles.image} source ={{uri:image}}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  image:{
    width:300,
    height:300,
    alignSelf:"center",
    borderColor:colors.primary,
    borderWidth:3,
    borderRadius:200
  },
  indicator:{
    marginRight:20,
  }
});

export default PreviewProfilePicture;