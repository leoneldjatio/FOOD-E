import React from 'react';
import { View, StyleSheet, Image,Dimensions } from 'react-native';

const {width,height} = Dimensions.get('window');

function CarouselItem({item}) {
  return (
    <View style={styles.container}>
    <Image style={styles.image}
        source={item.url}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  width:width,
  height:height/2.5,
  },
  image:{
    width:width,
    height:height/2.5,
    
  }
});

export default CarouselItem;