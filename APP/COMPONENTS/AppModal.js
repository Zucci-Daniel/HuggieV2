import React, {Children} from 'react';
import {StyleSheet, Text, View, Modal} from 'react-native';
import UserProfileScreen from '../SCREENS/UserProfileScreen';



export default function AppModal({visible,animationType,onRequestClose}) {
  return (
    <Modal
      visible={visible}
      animationType={animationType}
      onRequestClose={onRequestClose}>
      {/* <UserProfileScreen
        image={image}
        username={username}
        dept={department}
        level={level}>
        {children}
      </UserProfileScreen> */}
    </Modal>
  );
}

const styles = StyleSheet.create({});
