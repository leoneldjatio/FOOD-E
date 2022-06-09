import React from 'react';
import {KeyboardAvoidingView,ScrollView,TouchableWithoutFeedback,Keyboard } from 'react-native';

function KeyBoardAvoidWrapper({children}) {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView showsVerticalScrollIndicator={false} >
               {children}
              </ScrollView>  
            </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}



export default KeyBoardAvoidWrapper;