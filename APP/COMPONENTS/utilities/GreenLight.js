import React from 'react'
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native'
import colors from '../../config/colors'

export default function GreenLight({onPress,extraFadedStyle,extraGreenLightStyle}) {
    return (
        <TouchableNativeFeedback  onPress={onPress}>
        <View style={[styles.greenlightFaded,extraFadedStyle]}>    
        <View style={[styles.greenlight,extraGreenLightStyle]}>    
        </View>
        </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    greenlightFaded:{
        borderColor:colors.greenLight,
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center',
        height:60,
        width:60,
        borderRadius:100
    },
    greenlight:{
        backgroundColor:colors.greenLight,
        height:50,
        width:50,
        borderRadius:100
    }
})
