import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Apps/Screens/LoginScreen';
import { createContext, useEffect, useState } from 'react';
import { client } from './Apps/Utils/KindConfig';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './Apps/Navigations/TabNavigation';
import { useFonts } from 'expo-font';
import HomeNavigation from './Apps/Navigations/HomeNavigation';
import GlobalApi from './Apps/Utils/GlobalApi';


export const AuthContext=createContext();

export const UserDetailContext=createContext();
export const MembershipContext=createContext();
export const ReloadMethodsContext=createContext();

export default function App() {

  const [userDetail,setUserDetail]=useState();
  const [isMember,setIsMember]=useState(false);
  const [reload,setReload]=useState()
  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });

  const [auth,setAuth]=useState(false);
  useEffect(() => {
    checkAuthenticate();
}, [auth]);
  const checkAuthenticate = async () => {
    // Using `isAuthenticated` to check if the user is authenticated or not
    if (await client.isAuthenticated) {
      const userProfile = await client.getUserDetails();
      setUserDetail(userProfile)
      setAuth(true)
      checkUserMembership();
        // Need to implement, e.g: call an api, etc...
    } else {
      setAuth(false)
        // Need to implement, e.g: redirect user to sign in, etc..
    }
};

//Check Membership
const checkUserMembership=()=>{
  GlobalApi.checkUserMembership(userDetail.email).then(resp=>{
    setIsMember(resp.memberships?.length>0)
  })
}

  return (
    <View style={styles.container}>
       {/* <LoginScreen/> */}
       <AuthContext.Provider value={{auth,setAuth}}>
        <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
        <MembershipContext.Provider value={{isMember,setIsMember}}>
          <ReloadMethodsContext.Provider value={{reload,setReload}}>
       <NavigationContainer>
       {auth? <HomeNavigation/>:<LoginScreen/>}
       </NavigationContainer>
       </ReloadMethodsContext.Provider>
       </MembershipContext.Provider>
       </UserDetailContext.Provider>
       </AuthContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
