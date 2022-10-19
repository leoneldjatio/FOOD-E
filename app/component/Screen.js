import React from 'react';
import { SafeAreaView,StyleSheet,View ,StatusBar} from 'react-native';
import Constants from 'expo-constants';

function Screen({children,style}) {
    return <SafeAreaView style={[styles.screen,style]}>
        <StatusBar barStyle="dark-content"/>
         <View style={[styles.view,style]}>{children}</View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight,
        flex:1,  
       
 
    },
    view:{
       flex:1,
       
    }
});

export default Screen;