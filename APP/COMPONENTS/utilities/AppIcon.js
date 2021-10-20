import React from 'react'
import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import AppCamera from '../../ASSETS/camera.svg';


export default function AppIcon({name,size,extraStyle,onPress,color}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppCamera name={name?name:'camera'} size={size?size:50} style={[extraStyle]} color={color?color:'#ccc'} />
        </TouchableOpacity>   
    )
}

