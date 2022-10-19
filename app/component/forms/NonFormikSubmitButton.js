import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppButton from '../AppButton';
import colors from '../../config/colors';

function NonFormikSubmitButton({submitLabel,style,onPress}) {
  return (
    <View style={styles.container}>
        <AppButton style={[styles.button,style]} title={submitLabel} onPress={onPress} backColor="primary" textColor="white"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  button:{
   borderColor:colors.primary,
   marginTop:30,
  }
});

export default NonFormikSubmitButton;