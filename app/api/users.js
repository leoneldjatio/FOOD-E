import client from './client';

const register =(values)=>{
   return client.post('/users/signup',values);
   
}

const login = (values)=>{
  return  client.post('/users/login',values);
}

const resendVerificationMail =({email,userId,name})=>{
   return client.post('/users/resendVerification',{email,userId,name});
}

const sendResetPasswordCode= (values)=>{
  return client.post('/users/generateResetCode',values);
}

const resetPassword =(values)=>{
  return client.post('/users/resetPassword',values);
}

const uploadProfilePic =(imageData)=>{
  return client.post('/users/uploadProfilePic',imageData,{
    headers:{
      Accept:'application/json',
    'content-Type':'multipart/form-data',
    },
  });
}

const getUserProfilePicture = (userId)=>{
  return client.post('/users/getProfilePicture',userId);
}

export default {register,login,resendVerificationMail,getUserProfilePicture,sendResetPasswordCode,resetPassword,uploadProfilePic};
