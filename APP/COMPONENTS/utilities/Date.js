
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../config/colors'
import { scale, ScaledSheet } from 'react-native-size-matters';

export default function Date({date}) {
    return (
        <Text style={styles.date}>{date}</Text>
    )
}

const styles = ScaledSheet.create({
    date: {
        fontSize: scale(7),
        fontWeight: '500',
        color: colors.date,
        marginBottom: 10,
        textTransform:'lowercase'

    },
})
