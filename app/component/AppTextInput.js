import react from "react";
import { TextInput, StyleSheet, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import colors from "../config/colors";
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { useFormikContext } from 'formik';



function AppTextInput({ value, error, visible, icon, secondIcon, onPress, width = '100%', style, iconColor = "primary", ...otherProps }) {
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
        <Feather name={icon} size={20} color={colors[iconColor]} style={styles.icon} />
      </View>

    );
  } else if (!error && visible) {
    return (
      <View style={[styles.containerSuccess, style]}>
        <TextInput placeholderTextColor={colors.gray} style={styles.text} {...otherProps} />
        <Feather name={secondIcon} size={20} color={colors.success} onPress={onPress} style={styles.Secondicon} />
        <Feather name="check-circle" size={20} color={colors.success} style={styles.icon} />
      </View>);
  }

  else if (error) {
    return (
      <View style={[styles.containerError, style]}>
        <TextInput placeholderTextColor={colors.gray} style={styles.text} {...otherProps} />
        <Feather name={secondIcon} size={20} color={colors.error} onPress={onPress} style={styles.Secondicon} />
        <Feather name="alert-circle" size={20} color={colors.error} style={styles.icon} />
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

  },
  containerError: {
    borderWidth: 2,
    borderColor: colors.error,
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,

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

  },
  icon: {
    alignSelf: "flex-end",



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

export default AppTextInput;