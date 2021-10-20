import React from 'react'
import { Image, StyleSheet, View } from 'react-native';

import EmptyLogo from '../ASSETS/emptyLogo.svg';
import colors from '../config/colors';


export default function EmptyLogoSvg({profileImg}) {
    return (
        <View style={styles.EmptyLogo}>
            <EmptyLogo width={400} height={400} />
            <Image source={profileImg?profileImg: require('../ASSETS/nope.png')} style={styles.profileImage} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.brandColor,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    EmptyLogo: {
        position: 'relative',
        display:'flex'
    },
    profileImage: {
        position: 'absolute',
        zIndex: 5,
        top: '30%',
        right: '30%',
        width:150,
        height:150,
        borderRadius:100

    }

});