import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import InsideApp from './APP/APP_NAVIGATION/InsideApp';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  )
};

const styles=StyleSheet.create({
  GestureHandlerRootView:{
    flex: 1,
  }
})

const styles = StyleSheet.create({});
