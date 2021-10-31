import React from 'react';
import { View, StyleSheet,Text } from 'react-native';

import LottieView from 'lottie-react-native';

function EmptyDiv(props) {
    return (
        <View style={styles.container}>
            <View style={{height: '50%', marginTop: '15%'}}>
                <LottieView source={require('../ASSETS/74121-empty-favorites-screen.json')} autoPlay loop />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>No one matches your search</Text>
                <Text style={styles.text}>Try adjusting filter</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 17,
        color: '#000',
        letterSpacing: 1
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.7
    }
})

export default EmptyDiv;