import * as SecureStore from 'expo-secure-store';

const key ="profilePic";

const storeProfilePic =async profilePic=>{
    try {
        await SecureStore.setItemAsync(key,profilePic)
    } catch (error) {
        console.log('error storing the user Profile Picture',error);
    }
}

const getProfilePic = async ()=>{
    try {
        return await SecureStore.getItemAsync(key);
        ;
    } catch (error) {
        console.log('error getting the user Profile Picture',error);
    }
}
export default{storeProfilePic,getProfilePic};