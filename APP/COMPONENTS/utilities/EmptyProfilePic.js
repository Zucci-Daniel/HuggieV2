import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { scale } from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function EmptyProfilePic(props) {
    return (
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                <FontAwesome name='camera' color='#000' style={styles.camera} size={scale(30)} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#F7E0D2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera: {
        opacity: 0.8
    }
})

export default EmptyProfilePic;