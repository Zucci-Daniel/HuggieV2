import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

export default function PlainImage({source}) {
    return (
        <View style={styles.PlainImage}>
            <Image style={styles.image} source={source} />

        </View>
    )
}

const styles = StyleSheet.create({
    PlainImage:{
height:70,
width:70,
overflow:'hidden',
borderRadius:100
    },
    image:{
        width:'100%',
        height:'100%',
    }
})