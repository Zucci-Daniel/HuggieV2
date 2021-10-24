import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import InsideApp from './APP/APP_NAVIGATION/InsideApp';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import LightningModal from './APP/LightningModal';
export default function App() {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <InsideApp />
      {/* <LightningModal /> */}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
