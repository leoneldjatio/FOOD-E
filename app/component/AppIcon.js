import React from 'react';
import {StyleSheet } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import colors from '../config/colors';

function AppIcon({icon,color,style}) {
  return (
    <Feather size={20} name={icon} color={colors[color]} style={[style]}/>
  );
}

export default AppIcon;