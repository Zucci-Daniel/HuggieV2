//this tabs should hold 2 screen, hotlist and everyone screen,
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
//screens
import HotlistsScreen from '../SCREENS/HotlistsScreen';
import EveryoneScreen from '../SCREENS/EveryoneScreen';
//config
import tabConfig from '../config/tabConfig';
//components
import AppHeader from '../COMPONENTS/AppHeader';

export default function HotTabNav() {
  const TopTap = createMaterialTopTabNavigator();

  return (
    <TopTap.Navigator screenOptions={tabConfig}>
      <TopTap.Screen
        name="hotlistScreen"
        component={HotlistsScreen}
        options={{swipeEnabled: false, title: 'Hotlist'}}
      />
      <TopTap.Screen
        name="EveryOneScreen"
        options={{title: 'Everyone'}}
        component={EveryoneScreen}
      />
    </TopTap.Navigator>
  );
}

const styles = StyleSheet.create({});
