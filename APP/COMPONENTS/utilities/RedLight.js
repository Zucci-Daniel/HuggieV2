import React from 'react'
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native'
import colors from '../../config/colors'

export default function RedLight({extraStyle,onPress}) {
    return (
        <TouchableNativeFeedback onPress={onPress}>
        <View style={[styles.redLight,extraStyle]}>
        </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    redLight:{
        backgroundColor:colors.redLight,
        height:50,
        width:50,
        borderRadius:100
    }
})
