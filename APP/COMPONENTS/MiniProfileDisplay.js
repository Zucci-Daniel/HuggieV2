import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Details from './utilities/Details'
import ProfileName from './utilities/ProfileName';
import LinearGradient from 'react-native-linear-gradient'; // import LinearGradient


export default function MiniProfileDisplay({ source }) {
    return (
        <View style={styles.MiniProfileDisplay}>
            <Image source={source} style={styles.image} resizeMode={'contain'} />
            <LinearGradient
                colors={[' rgba(214, 214, 231, 3)', ' rgba(214, 214, 231, 3)']}
                style={[styles.linearGradient, styles.initialsWrapper]}
            >
                <ProfileName username={"Becky lynch"} />
                <Details department="Edu English" level={"400"} />
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    MiniProfileDisplay: {
        height: 400, 
        width: 250,
        backgroundColor: 'red',
        flexWrap:'wrap',
        padding:10
    },
    image: {
        width: '100%',
        height: '100%',
    },
    initialsWrapper: {
        height: 70,
        width: '100%',
        backgroundColor: 'black',
        position: "absolute",
        bottom: 0,
        paddingHorizontal: 15,
        paddingVertical: 5
    }
})
