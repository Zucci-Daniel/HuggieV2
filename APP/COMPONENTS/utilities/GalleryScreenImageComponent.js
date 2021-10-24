import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Image} from 'react-native';
import { scale } from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/Ionicons';
import {launchImageLibrary} from 'react-native-image-picker';

function GalleryScreenImageComponent({pic, onClick, openImage}) {
    
    let div = (
        <TouchableWithoutFeedback onPress={openImage}>
            <View style={styles.mainContainer}>
                <Image source={{uri: `https://res.cloudinary.com/dyojwpsfb/${pic}`}} style={styles.image} />
            </View>
        </TouchableWithoutFeedback>
    )

    const selected = () => {
        launchImageLibrary({mediaType: 'photo'}, (response) => {
            const data =response.assets[0].uri;
            if(data){
                onClick(data)
            }
        })
    }

    if(!pic){
        div = (
            <TouchableWithoutFeedback onPress={selected}>
                <View style={styles.mainContainer}>
                    <Text>Add Image</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
    
    return (
        <View style={styles.container}>
            {div}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        paddingTop: scale(2),
        marginBottom: scale(2),
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainContainer: {
        height: scale(200),
        width: '98%',
        backgroundColor: 'rgba(0,0,0,0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    icon: {
        opacity: 0.7
    },
    somm: {
        height: 200,
        width: 200,
        backgroundColor: 'red'
    },
    image: {
        height: '100%',
        width: '100%'
    }
})

export default GalleryScreenImageComponent;