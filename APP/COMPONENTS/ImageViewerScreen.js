import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { scale } from 'react-native-size-matters';
import ImageViewerUtilities from './utilities/ImageViewerUtilities';

function ImageViewerScreen({data, close, upload, deletePhoto}) {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image source={{uri: `https://res.cloudinary.com/dyojwpsfb/${data.img}`}} style={styles.image} />
            </View>
            <View style={styles.bottom}>
                <TouchableWithoutFeedback onPress={() => deletePhoto(data.num)}>
                    <View style={styles.container2}>
                        <ImageViewerUtilities name='delete' />
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => upload(data.num)}>
                    <View style={styles.container2}>
                        <ImageViewerUtilities name='upload' />
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={close}>
                    <View style={styles.container2}>
                        <ImageViewerUtilities name='close' />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    top: {
        height: '70%',
        width: '100%',
        flexDirection: 'row'
    },
    bottom: {
        height: '30%',
        width: '100%',
        backgroundColor: '#fff',
        borderTopRightRadius: scale(20),
        borderTopLeftRadius: scale(20),
        flexDirection: 'row',
    },
    image: {
        resizeMode: 'contain',
        flex: 1,
        aspectRatio: 1
    },
    container2: {
        height: scale(90),
        width: '33.5%',
        alignItems: 'center',
        paddingTop: 10
    }
})

export default ImageViewerScreen;