import React from 'react';
import { Text, StyleSheet } from 'react-native';
import defaultStyles from '../../config/styles';


function Label({style,label,...otherProps}) {
  return (
    <Text style={[defaultStyles.text,style]} {...otherProps}>{label}</Text>
  );
}

export default Label;