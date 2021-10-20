import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import MyRequestScreen from './MyRequestScreen';
import tabConfig from '../config/tabConfig';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NormalHeader from '../COMPONENTS/NormalHeader';
import UserProfileScreen from './UserProfileScreen';
import { useNavigation } from '@react-navigation/native';
import ChatHeader from '../COMPONENTS/ChatHeader';


// const Tab = createBottomTabNavigator();
const RequestTab = createMaterialTopTabNavigator();

export default function MyRequestNav() {
  const StackNavigator = createNativeStackNavigator();

  const navigation = useNavigation();

  return (
    <StackNavigator.Navigator
      screenOptions={tabConfig,
        { headerShown: true }}>
      <StackNavigator.Screen
        options={{ headerShown: true, header: () => <NormalHeader screenTitle="My Requests" /> }}
        name="MyRequests" component={MyRequestScreen} />

      <StackNavigator.Screen
        name='userProfile'
        component={UserProfileScreen}
        options={({ route }) => ({
          header: ({ navigation }) => <ChatHeader 
         onPress={() => navigation.goBack()} />,
        })}
      // 

      />
    </StackNavigator.Navigator>
  );
}