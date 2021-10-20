import React from 'react'
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import AppStatusBar from '../COMPONENTS/AppStatusBar';

import BrandLogo from '../COMPONENTS/BrandLogo';
import Cartoon from '../COMPONENTS/Cartoon';
import { scale, ScaledSheet } from 'react-native-size-matters';



export default function SplashScreen() {
    return (
        <>
            <View style={styles.container}>
                <StatusBar translucent backgroundColor={'transparent'} />
                <View style={styles.svg}>
                    <Cartoon />
                </View>
                <View style={styles.logo}>
                    <BrandLogo />
                </View>

            </View>
        </>
    )
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DD3A88'
    },
    svg: {
        height: '40%',
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
    },

})
