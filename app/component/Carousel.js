import React from 'react';
import { View, StyleSheet, Dimensions, Animated } from 'react-native';
import colors from '../config/colors';
import CarouselItem from './CarouselItem';
import Paginator from './Paginator';
import RNAnimatedScrollIndicators from 'react-native-animated-scroll-indicators';

const { width, height } = Dimensions.get('window');
const scrollX = new Animated.Value(0);
let position = Animated.divide(scrollX, width);

function Carousel({ data }) {
    if (data && data.length) {
        return (
            <View style={styles.container}>
                <Animated.FlatList 
                    data={data}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    bounces={false}
                    snapToAlignment='center'
                    scrollEventThrottle={16}
                    decelerationRate={'fast'}
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x:scrollX } } }],
                    { useNativeDriver: false })}
                    renderItem={({ item }) => {
                        return <CarouselItem item={item}/>
                    }}
                    
                />
               <Paginator data={data} scrollX={scrollX}/>
            </View>
        );
    }
    console.log('please provide image');
    return null;

}

const styles = StyleSheet.create({
    container: {

    },
    dotView: {
        flexDirection: "row",
        justifyContent: "center",
    }
});

export default Carousel;