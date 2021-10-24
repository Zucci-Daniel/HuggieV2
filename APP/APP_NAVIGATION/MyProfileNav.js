//this tabs should hold 2 screen, hotlist and everyone screen,

import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfileScreen from './../SCREENS/ProfileScreen';
import GalleryScreen from './../SCREENS/GalleryScreen';
import tabConfig from '../config/tabConfig';

const Tab = createMaterialTopTabNavigator();

export default function MyProfileNav() {
    return (
        <Tab.Navigator screenOptions={tabConfig}>    
            <Tab.Screen name="Display" component={ProfileScreen} />   
            <Tab.Screen name="Gallery" component={GalleryScreen} /> 
       </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})
