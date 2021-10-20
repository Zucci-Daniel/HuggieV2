import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { scale, ScaledSheet } from 'react-native-size-matters';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';


export default function Logout({onPress,extraStyle}) {
    return (
        <TouchableOpacity style={[styles.Logout,extraStyle]} onPress={onPress}>
            <Icons name="logout" size={scale(40)} color={colors.brandColor} />
        </TouchableOpacity>
    )
}

const styles = ScaledSheet.create({
    Logout:{
        position:"absolute",
        bottom:scale(100),
        right:scale(20)

    }
})
