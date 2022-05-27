import React, { useState } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import AppLoading from 'expo-app-loading'
import ReviewDetails from './Screens/ReviewDetails';
import Navigator from './routes/drawer'

const getFonts = () => Font.loadAsync({
    'redressed' : require('./assets/fonts/Redressed-Regular.ttf')
  });


export default function App() {

  const [fontsLoaded,setFontsLoader] = useState(false);

  if(fontsLoaded)
  {
    return (
      <View style={styles.container}>
        <Navigator />
      </View>
    )
  }
  else
  {
    return(
      <AppLoading startAsync={getFonts} onFinish={()=>setFontsLoader(true)} onError={() => console.log('error')}/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
