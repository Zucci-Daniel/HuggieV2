import React, { Children } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors';
import Logo from '../ASSETS/Huggie.svg';
import { scale, ScaledSheet } from 'react-native-size-matters';


export default function AppHeader({children}) {
    return (
        <View style={styles.AppHeader}>
            <Logo style={styles.huggie} />
            {children}
        </View>
    )
}

const styles = ScaledSheet.create({
    AppHeader: {
        backgroundColor: colors.brandColor,
        padding: '6@s',
        paddingBottom: '10@s'
    },
    huggie: {
        height: 150
    }
})
