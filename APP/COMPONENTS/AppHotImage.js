import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View,TouchableHighlight } from 'react-native'
import { scale,ScaledSheet } from 'react-native-size-matters';


const img = '../ASSETS/blueGirl.jpg';

export default function AppHotImage({ source, keyProp }) {
    return (
        <TouchableHighlight key={keyProp} style={styles.imageWrapper} >
             <View >
            <Image style={styles.image} source={source} resizeMode='cover' />
        </View>
        </TouchableHighlight>
       
    )
}

const CARD_HEIGHT = Dimensions.get('window').height * 0.3;


const styles = ScaledSheet.create({
    imageWrapper: {
        width: '49%',
        height: CARD_HEIGHT,
        margin:'1@s',
      
    },
    image: {
        height: '100%',
        width: '100%'
    }
})
