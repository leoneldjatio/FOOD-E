import React from 'react';
import LottieView from 'lottie-react-native';
import {View,StyleSheet} from 'react-native';

function ActivityIndicator({visible = false}) {
    if (visible == false) {
        return null;
    }

  return (
   <View style={styles.overlay}>
  <LottieView 
  autoPlay={true}
  loop={true}
  source={require('../assets/animations/loader.json')}
  />
  </View> 
  )};

const styles = StyleSheet.create({
  overlay:{
    position:"absolute",
    backgroundColor:'white',
    height:"100%",
    width:"100%",
    opacity:0.8,
    zIndex:1,
  },
})


export default ActivityIndicator;