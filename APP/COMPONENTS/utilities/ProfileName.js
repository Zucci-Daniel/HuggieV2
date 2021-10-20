
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../config/colors'
import { ScaledSheet } from 'react-native-size-matters';

export default function ProfileName({extraStyles,username}) {
    return (
        <Text style={[styles.profileName,extraStyles]}>{username?username:'username'}</Text>
    )
}

const styles = ScaledSheet.create({
    profileName: {
        fontSize: '10@s',
        marginBottom:'5@s',
        fontWeight: '400',
        color: colors.profileName,
        textTransform:'capitalize'
    },
})
