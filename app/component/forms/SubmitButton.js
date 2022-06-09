import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppButton from '../AppButton';
import {useFormikContext} from 'formik';
import colors from '../../config/colors';

function SubmitButton({submitLabel}) {
    const {handleSubmit} = useFormikContext();
  return (
    <View style={styles.container}>
        <AppButton style={styles.button} title={submitLabel} onPress={handleSubmit} backColor="primary" textColor="white"/>
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

export default SubmitButton;