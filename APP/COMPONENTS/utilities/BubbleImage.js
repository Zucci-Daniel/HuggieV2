import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import BubbleBorder from './BubbleBorder'

export default function BubbleImage({picture}) {
    return (
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={picture?picture:require('../../ASSETS/girl.jpg')} />
          </View>
    )
}

const styles = StyleSheet.create({
    imageWrapper:{
        height:70,
        width:70,
        borderRadius:100,
        overflow:'hidden'
    },
    image:{
        overflow:'hidden',
        width:'100%',
        height:'100%',
    }
})