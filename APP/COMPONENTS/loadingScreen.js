import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import LottieView from 'lottie-react-native';

function loadingScreen(props) {
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor={'#DE5295'} />
            <LottieView source={require('../ASSETS/8707-loading.json')} autoPlay loop />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        backgroundColor: 'pink'
    }
})

export default loadingScreen;