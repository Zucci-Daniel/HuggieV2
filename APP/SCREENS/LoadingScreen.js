import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import BrandLogo from '../COMPONENTS/BrandLogo'

export default function LoadingScreen() {
    return (
        <View style={styles.container}>
           <BrandLogo />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#DD3A88'
    }
})
