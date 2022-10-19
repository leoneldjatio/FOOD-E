import react from "react";
import { TextInput, StyleSheet, View, TouchableOpacity } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import colors from "../config/colors";
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';


function AppQuantityInput({ value, error, visible, icon, secondIcon, onPressMinus,onPressPlus, style, iconColor = "primary", ...otherProps }) {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
      });
      if (!fontsLoaded) {
        return null;
      }
    if (!visible) {
        return (
    
          <View style={[styles.container, style]}>
            <TextInput placeholderTextColor={colors.gray} style={styles.text} {...otherProps} />
            <TouchableOpacity onPress={onPressMinus}>
            <Feather name="minus" size={25} color={colors.primary} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressPlus}>
            <Feather name="plus" size={25} color={colors.primary}  style={styles.Secondicon} />
            </TouchableOpacity>
          </View>
    
        );
      } else if (!error && visible) {
        return (
          <View style={[styles.containerSuccess, style]}>
           <TextInput placeholderTextColor={colors.gray} style={styles.text} {...otherProps} />
            <TouchableOpacity onPress={onPressMinus}>
            <Feather name="minus" size={20} color={colors.primary} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressPlus}>
            <Feather name="plus" size={20} color={colors.primary} style={styles.Secondicon} />
            </TouchableOpacity>
          </View>);
      }
    
      else if (error) {
        return (
          <View style={[styles.containerError, style]}>
            <TextInput placeholderTextColor={colors.gray} style={styles.text} {...otherProps} />
            <TouchableOpacity onPress={onPressMinus}>
            <Feather name="minus" size={20} color={colors.primary} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressPlus}>
            <Feather name="plus" size={20} color={colors.primary}  style={styles.Secondicon} />
            </TouchableOpacity>
          </View>
    
        );
      }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    width:'65%'
  },
  containerError: {
    borderWidth: 2,
    borderColor: colors.error,
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    width:'65%'

  },
  containerSuccess: {
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    borderColor: colors.success,
    padding: 15,
    marginVertical: 10,
    width:'65%'

  },
  icon: {
    alignSelf: "flex-end",
    marginRight:20

  },
  Secondicon: {
    alignSelf: "flex-end",
    paddingRight: 10,


  },
  text: {
    fontFamily: "Poppins_400Regular",
    color: colors.dark,
    paddingLeft: 5,
    flex: 1,
  }
});

export default AppQuantityInput;