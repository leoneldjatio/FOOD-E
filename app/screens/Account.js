import React,{useContext} from 'react';
import { View, StyleSheet,Image, ScrollView } from 'react-native';
import AppText from '../component/AppText';
import Screen from '../component/Screen';
import colors from '../config/colors';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import ListItems from '../component/ListItems';
import useAuth from '../auth/useAuth';
import AuthContext from '../auth/context';


function Account({navigation}) {
  const {user,logOut} = useAuth();
  const {userProfilePicture} = useContext(AuthContext);

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
      });
      if (!fontsLoaded) {
        return null;
      }
    
  return (
    
    <Screen style={{paddingLeft:25,paddingRight:25,backgroundColor:colors.white}}>
      <ScrollView>
     <View style={styles.profileImageContainer}>
      <Image style={styles.Image} source ={{uri:userProfilePicture}}/>
      <AppText style={styles.profileName} children={user.name}/>
     </View>
         <View >
          <ListItems
           children="Account and Profile"
           onPress={()=>navigation.navigate("Account and Profile") }
           icon="edit-3"
           color="primary"/>

           <ListItems
           children="Manage Payment Methods"
           onPress={()=>navigation.navigate("Manage Payment Methods") }
           icon="credit-card"
           color="primary"/>

           <ListItems
           children="Manage Address"
           onPress={()=>navigation.navigate("Manage Address") }
           icon="map-pin"
           color="primary"/>

           <ListItems
           children="Order History"
           onPress={()=>navigation.navigate("Order History") }
           icon="clock"
           color="primary"/>

           <ListItems
           children="Contact Support"
           onPress={()=>navigation.navigate("Contact Support") }
           icon="phone-call"
           color="primary"/>

           <ListItems
           children="Refer to a Friend"
           onPress={()=>navigation.navigate("Refer to a Friend") }
           icon="gift"
           color="primary"/>

           <ListItems
           children="Write A Review"
           onPress={()=>navigation.navigate("Write A Review") }
           icon="star"
           color="primary"/>

           <ListItems
           children="Terms and Condition"
           onPress={()=>navigation.navigate("Terms and Condition") }
           icon="file-text"
           color="primary"/>

           <ListItems
           children="Privacy Policy"
           onPress={()=>navigation.navigate("Privacy Policy") }
           icon="file"
           color="primary"/>

          <ListItems
           children="Logout"
           onPress={()=>logOut()}
           icon="log-out"
           color="primary"/>
      </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  profileImageContainer: {
    justifyContent:"flex-start",
    alignContent:"center",
    alignSelf:"center",
    marginBottom:70
  },
  Image:{
    borderRadius:50,
    borderColor:colors.primary,
    borderWidth:6,
    alignSelf:"center",
    width:100,
    height:100,
  },
  profileName:{
    alignSelf:"center",
    marginTop:15,
    fontFamily: "Poppins_400Regular",
    lineHeight:21,
    color:colors.dark,
  }
});

export default Account;