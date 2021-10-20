import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors';
import { scale, ScaledSheet } from 'react-native-size-matters';



export default function NormalHeader({ onPress, screenTitle, screenImage, onlyTitle }) {
    return (
        <View style={styles.ChatHeader}>
                <Text style={styles.screenTitle}>{screenTitle}</Text>
            </View>
    )
}

const styles = ScaledSheet.create({
    ChatHeader: {
        backgroundColor: colors.brandColor,
        paddingLeft: '10@s',
        paddingBottom:'20@s' ,
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    screenTitle: {
        color: colors.white,
        marginLeft: '2@s',
        fontSize:'11@s'

    },
   
})
