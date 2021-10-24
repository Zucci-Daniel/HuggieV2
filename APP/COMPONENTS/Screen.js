import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import AppHotImage from '../COMPONENTS/AppHotImage'
import colors from '../config/colors'


export default function Screen({children,innerRef,extraStyles}) {

    return (
        <View style={[styles.container,extraStyles]} ref={innerRef} >
           {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // flex:1,
        backgroundColor:colors.white,
        width:'100%',
        height:Dimensions.get('window').height

    }
})
