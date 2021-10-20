import React from 'react'
import { StyleSheet, Text, View,Button} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyRequestScreen from '../SCREENS/MyRequestScreen';
import UserProfileScreen from '../SCREENS/UserProfileScreen';
import ChatHeader from '../COMPONENTS/ChatHeader';
//config
import tabConfig from '../config/tabConfig';
//components
import NormalHeader from '../COMPONENTS/NormalHeader';

const Stack = createNativeStackNavigator();

export default function MyRequestNav() {
    return (
        <Stack.Navigator 
        screenOptions={tabConfig,
            { headerShown: true }}>
         <Stack.Screen name="MyRequests" component={MyRequestScreen} 
          options={{ headerShown: true, header: () => <NormalHeader screenTitle="My Requests" /> }}
         />   
     </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
