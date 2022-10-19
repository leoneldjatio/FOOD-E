import * as SecureStore from 'expo-secure-store';

const key="addMealToCart";

const addMealToCart =async addMealToCart=>{
    try {
        await SecureStore.setItemAsync(key,addMealToCart)
    } catch (error) {
        console.log('error adding meal to cart',error);
    }
}

const getMealToCart = async ()=>{
    try {
        return await SecureStore.getItemAsync(key);
    } catch (error) {
        console.log('error getting meal',error);
    }
}

const removeMealFromCart = async ()=>{
    try {
       await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.log('error removing meal from cart');
    }
}



export default{addMealToCart,getMealToCart,removeMealFromCart};