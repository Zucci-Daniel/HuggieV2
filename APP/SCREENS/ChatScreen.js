import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import InputBox from '../COMPONENTS/chatComponents.js/InputBox';
import RecievedMessageBox from '../COMPONENTS/chatComponents.js/RecievedMessageBox';
import SentMessageBox from '../COMPONENTS/chatComponents.js/SentMessageBox';
import colors from '../config/colors';

export default function ChatScreen() {
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        <View style={styles.eitherMessage}>
          <SentMessageBox />
          <RecievedMessageBox />
          <SentMessageBox />
          <SentMessageBox />
          <RecievedMessageBox />
          <SentMessageBox />
          <RecievedMessageBox />
          <SentMessageBox />
          <SentMessageBox />
          <RecievedMessageBox />
          <SentMessageBox />
          <RecievedMessageBox />
          <SentMessageBox />
          <SentMessageBox />
          <RecievedMessageBox />
          <SentMessageBox />
          <RecievedMessageBox />
          <SentMessageBox />
          <SentMessageBox />
          <RecievedMessageBox />
        </View>
      </ScrollView>
      <View style={styles.inputWrapper}>
        <InputBox />
      </View>
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  eitherMessage: {
    flex: 1,
    backgroundColor: colors.white,
    width: '100%',
  },
  Container: {
    position: 'relative',
    marginBottom: scale(5),
  },
  inputWrapper: {
    backgroundColor: 'orange',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: scale(10),
    height: 100,
    zIndex: 4,
  },
});
