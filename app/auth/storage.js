import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

const key ="authToken"

const storeToken = async authToken=>{
    try {
        await SecureStore.setItemAsync(key,authToken);
    } catch (error) {
        console.log('error storing the authToken');
    }
    
}
const getUser =async ()=>{
 const token =await getToken();
 if(token){
    return jwtDecode(token)
 }else{
    return null;
 }
}

const getToken = async ()=>{
    try {
        return await SecureStore.getItemAsync(key);
        ;
    } catch (error) {
        console.log('error getting the authToken');
    }
}

const removeToken = async ()=>{
    try {
       await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.log('error removing the authToken');
    }
}



export default{getUser,removeToken,storeToken};