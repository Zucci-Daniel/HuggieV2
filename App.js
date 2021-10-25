import React,{useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import InsideApp from './APP/APP_NAVIGATION/InsideApp';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import LightningModal from './APP/LightningModal';
export default function App() {
  useEffect(() => {
    console.log('showing splash screen now');
    SplashScreen.hide();
    console.log('Splash screen ended now');
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <InsideApp />
      {/* <LightningModal /> */}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
