import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../config/colors'
import { scale,ScaledSheet } from 'react-native-size-matters';

export default function Details({extraStyles,department,level}) {
    return (
    <>
<Text  style={[styles.details,extraStyles]}>{department?department:'Dept'} 
<Text style={styles.fientLine}> | </Text> {level?level:'Level'}L </Text>
     </>
    )
}

const styles = ScaledSheet.create({
    details: {
        fontSize: '8@s',
        fontWeight: '400',
        color: colors.details
    },
    fientLine: {
        color: colors.brandColor
    },
})
