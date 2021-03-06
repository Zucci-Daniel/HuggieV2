import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View,TouchableHighlight } from 'react-native'
import { scale,ScaledSheet } from 'react-native-size-matters';

const img = '../ASSETS/blueGirl.jpg';

export default function AppHotImage({ image, keyProp,onPress }) {
    const container = (
        <TouchableHighlight key={keyProp} style={styles.imageWrapper} onPress={onPress} >
             <View >
                <Image style={styles.image} source={{uri: `https://res.cloudinary.com/dyojwpsfb/${image}`}} resizeMode='cover' />
            </View>
        </TouchableHighlight>
    )
    
    return (
        <>
            {container}
        </>
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
    },
    emptyImage: {
        height: '100%',
        width: '100%',
        backgroundColor: 'cyan',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
