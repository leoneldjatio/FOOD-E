import React from 'react';
import { View, StyleSheet,TouchableWithoutFeedback,Image } from 'react-native';
import colors from '../config/colors';

function Logo({onPress,imageUrl}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.Image} source={imageUrl}/>
            </View>
        </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
        borderRadius: 20,
        width: 80,
        height:80,
        marginLeft:15,
        justifyContent:"center",
       
  },
  Image: {
    borderRadius:30,
    width:60,
    height: 60,
    alignSelf:"center",
    backgroundColor:colors.white,
   
    
},
});

export default Logo;