import React from 'react';
import { Text, StyleSheet } from 'react-native';
import defaultStyles from '../config/styles';

function AppText({children,numberOfLines,style,value,...otherProps}) {
  return (
    <Text numberOfLines={numberOfLines} style={[defaultStyles.text,style]} {...otherProps}>{children}</Text>
  );
}


export default AppText;