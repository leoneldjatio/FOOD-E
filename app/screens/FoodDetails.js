import React,{useContext} from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Carousel from '../component/Carousel';
import colors from '../config/colors';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import AppText from '../component/AppText';
import { useTranslation } from 'react-i18next';
import AppIcon from '../component/AppIcon';
import * as Yup from 'yup';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppForm from '../component/forms/AppForm';
import AppFormQuantityField from '../component/forms/AppFormQuantityField';
import SubmitButton from '../component/forms/SubmitButton';
import AppFormTextField from '../component/forms/AppFormTextField';
import AuthContext from '../auth/context';
import AddToCart from '../auth/addToCartStorage';
import addToCartStorage from '../auth/addToCartStorage';
import cartItems from '../redux/reducers/cartItems';
import {useDispatch} from 'react-redux';


function FoodDetails({route}) {
  const {itemCount} =useContext(AuthContext);
  const dispatch=useDispatch();
  const mealInfo=route.params;
  const price=mealInfo.mealPrice;
  const stock=mealInfo.stock;

  const amountToDisplay=()=>{
     if(itemCount>stock){
      Alert.alert(`Not enough orders available,Only ${stock} orders remaining`)
     }
      if(itemCount<=stock&&itemCount>1){
        return itemCount*price;
      }
      return mealInfo.mealPrice;
}
  

  const validationSchema=(max=mealInfo.stock)=>Yup
    .object()
    .shape({
     quantity:Yup
     .number()
     .min(1).max(max,'Not enough stock')
     .required('No quantity')
     .label(),
     total:Yup
     .number()
     .required()
     .label(),
     });

  const {t} =useTranslation();

  let [fontsLoaded] = useFonts({
    Poppins_400Regular, BebasNeue_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }
  const handleSubmit=(values)=>{
    const totalPrice=(price*parseInt(itemCount));
    const cartValues={Food:mealInfo,mealQuantity:values.quantity};
    //let existingItems= addToCartStorage.getMealToCart();
    //const upadatedItems=[...existingItems,cartValues]
    dispatch({type:'ADD_TO_CART',payload:cartValues});
  }
  return (
    
    <View style={styles.container}>
      <KeyboardAwareScrollView>
  <Carousel data={mealInfo.mealImageList}/>

    <View style={{paddingLeft:25,paddingRight:25,backgroundColor:colors.white}}>
      <View style={{flexDirection:"row", marginTop:20}}>
      <AppText numberOfLines={2} style={styles.title} children={mealInfo.name}/>
      <AppIcon style={styles.icon} icon="clock" color="secondary"/>
      </View>
      <View style={{flexDirection:"row", marginTop:5}}>
        <AppText style={styles.subtitle} children={mealInfo.category_name}/>
        <AppText style={styles.timer} children="34 mins"/>
      </View>
      <View style={{marginTop:25}}>
        <AppText numberOfLines={5} style={styles.description} children={t('food_description')}/>
      </View>
      <View style={{marginTop:5}}>
      <AppText style={styles.detailDescription} children={mealInfo.description}/>
      </View>

      <AppForm   
         enableReinitialize={true}
         initialValues={{quantity:"",total:price}}
         onSubmit={handleSubmit}
         validationSchema ={validationSchema}      
      >
      <View style={{flexDirection:"row",marginTop:25}}>
       <View style={{flex:1}}>
      <AppFormQuantityField
          keyboardType="phone-pad"
          textContentType="none"
          name="quantity" 
          label={t('food_details_quantity')}
          placeholder="1"
      
      />
       </View>
        <AppFormTextField
        name="total"
        label={t('food_details_subtotal')}
        children={amountToDisplay()}
        currency="XAF"
        />
      
       
      </View>
      <SubmitButton style={styles.button} submitLabel={t('food_details_add_to_basket')}/>
      </AppForm>
      
      
      
    </View>
    </KeyboardAwareScrollView>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.white,
    flex:1
  },
  title: {
    fontFamily:"BebasNeue_400Regular",
    fontSize:36,
    fontWeight:"400",
    lineHeight:43,
    flex:1
  },
  icon:{
    alignSelf:"flex-end"
  },
  subtitle:{
    flex:1,
    color:colors.secondary,
    fontFamily:"Poppins_400Regular",
    fontSize:14
  },
  timer:{
    color:colors.secondary,
    fontFamily:"Poppins_400Regular",
    fontSize:14
  },
  description:{
    fontFamily:"BebasNeue_400Regular",
    fontSize:16,
    lineHeight: 21

  },
  detailDescription:{
    fontFamily:"Poppins_400Regular",
    color:colors.gray,
    textAlign:"justify"
  },
  button:{
    marginTop:5
  }
});

/**const mapDispatchToProps=(dispatch)=>{
  return{
    addItemToCart:(meal)=>dispatch({type:'ADD_TO_CART',payload:meal})
  }
}**/

export default FoodDetails;