import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';

GoogleSignin.configure({
    webClientId: '',
    offlineAccess: true
})

function TestingScreen(props) {
    const [userGoogleInfo, setUserGoogleInfo] = useState();
    const [loaded, setLoaded] = useState(false);

    return (
        <View>

        </View>
    );
};

const styles = StyleSheet.create({
    
})

export default TestingScreen;