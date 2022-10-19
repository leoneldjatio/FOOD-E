import React from 'react';
import { View, StyleSheet,Animated,Dimensions } from 'react-native';
import colors from '../config/colors';

function Paginator({data,scrollX}) {
  const {width} = Dimensions.get('window');
  return (
    <View style={styles.container}>
        {data.map((_,i)=>{
            const inputRange=[(i-1)*width,i*width,(i+1)*width];
            const dotWidth=scrollX.interpolate({
             inputRange,
             outputRange:[15,30,15],
             extrapolate:'clamp'
            });

            const dotHeight=scrollX.interpolate({
              inputRange,
              outputRange:[3,3,3],
              extrapolate:'clamp'
             });

             const backgroundColor=scrollX.interpolate({
              inputRange,
              outputRange:[colors.white,colors.primary,colors.white],
              extrapolate:'clamp'
             });

            return <Animated.View  style={[styles.dot,{width:dotWidth,height:dotHeight,backgroundColor:backgroundColor}]} key={i.toString()}/>
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    height:64,
    position:"absolute",
    marginTop:335,
    alignSelf:"center"
  },
  dot:{
    height:10,
    backgroundColor:colors.primary,
    marginHorizontal:8
  }
});

export default Paginator;