import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

function ImageViewerUtilities({name}) {
    let div = (
        <>
            <View style={[styles.circle]}>
                <FontAwesome name='trash' size={20} color='#fff' />
            </View>
            <Text style={styles.text}>Delete</Text>
        </>
    )
    if(name === 'upload'){
        div = (
            <>
                <View style={[styles.circle, {backgroundColor: 'rgb(100, 100, 255)'}]}>
                    <AntDesign name='upload' size={20} color='#fff' />
                </View>
                <Text style={styles.text}>Upload</Text>
            </>
        )
    }else if(name === 'close'){
        div = (
            <>
                <View style={[styles.circle, {backgroundColor: 'rgb(200, 200, 200)'}]}>
                    <FontAwesome name='close' size={20} color='#fff' />
                </View>
                <Text style={styles.text}>Close</Text>
            </>
        )
    }
    return (
        div
    );
}

const styles = StyleSheet.create({
    circle: {
        height: scale(60),
        width: scale(60),
        backgroundColor: 'rgb(255, 50, 50)',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text :{
        color: '#000',
        paddingTop: 5,
        opacity: 0.8
    }
})

export default ImageViewerUtilities;