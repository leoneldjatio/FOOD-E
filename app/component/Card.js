import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Image, Text, ScrollView } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import colors from '../config/colors';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import TextTicker from 'react-native-text-ticker';
import {BlurView} from 'expo-blur'



function Card({ onPress, imageUrl, title, subtitle, icon, iconColor, likeIcon, likeIconColor, shopBagPress, likeIconPress, currency }) {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular, BebasNeue_400Regular,
    });
    if (!fontsLoaded) {
        return null;
    }
    return (
        <TouchableWithoutFeedback onPress={onPress}>

            <View style={styles.card}>
                    <Image source={imageUrl} style={styles.Image} />

                <BlurView intensity={20} style={styles.likeIconBackground}>
                    <Feather name={likeIcon} size={20} color={colors[likeIconColor]} style={styles.likeIcon} onPress={likeIconPress} />
                </BlurView>
                <TextTicker
                duration={3000}
                loop
                bounce
                repeatSpacer={50}
                marqueeDelay={1000}
                numberOfLines={1} 
                style={styles.title}
                >
                  {title}
                    </TextTicker>  
                <View style={{ flex: 0, flexDirection: "row", paddingTop: 5, paddingBottom: 10, paddingLeft: 5, paddingRight: 5, marginRight: 5 }}>  
                <Text style={styles.subtitle}>{subtitle}</Text>
                    <Text style={styles.currency}>{currency}</Text>
                    <View style={{ backgroundColor: colors.primary, borderRadius: 5, marginRight: 1 }}>
                        <Feather name={icon} size={20} color={colors[iconColor]} style={styles.icon} onPress={shopBagPress} />
                    </View>
                </View>

            </View>


        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        height: 280,
        width: 180,
        backgroundColor: colors.white,
        borderRadius: 15,
        marginLeft: 6,
        borderWidth: 0.4,
        borderColor: colors.white
    },
    Image: {
        width: "100%",
        height: 200,
        borderRadius: 15,

    },
    title: {
        paddingTop: 10,
        paddingLeft: 10,
        lineHeight: 21,
        fontSize: 14,
        fontWeight: "500",
        fontFamily: "Poppins_400Regular"
    },
    subtitle: {
        paddingLeft: 5,
        color: colors.primary,
        paddingBottom: 5,
        paddingTop: 5,
        lineHeight: 22,
        fontSize: 18,
        fontWeight: "400",
        fontFamily: "BebasNeue_400Regular"

    },
    icon: {
        color: colors.white,
        padding: 4,

    },
    likeIcon: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 3,
        color: colors.white,
        alignSelf: "center",

    },
    likeIconBackground: {
        justifyContent: "center",
        position: 'absolute',
        top: 162,
        bottom: 95,
        left: 142,
        right: 50,
        padding: 13,
        borderRadius: 5,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        overflow:"hidden"

    },
    currency: {
        paddingLeft: 5,
        flex: 1,
        color: colors.primary,
        paddingBottom: 5,
        paddingTop: 5,
        lineHeight: 22,
        fontSize: 18,
        fontWeight: "400",
        fontFamily: "BebasNeue_400Regular"
    }

});

export default Card;