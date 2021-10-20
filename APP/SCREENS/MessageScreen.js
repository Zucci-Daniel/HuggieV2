import React from 'react'
import { StyleSheet, Text, View, Image, } from 'react-native';
import EmptyLogoSvg from '../COMPONENTS/EmptyLogoSVG';
import colors from '../config/colors';

import Icons from 'react-native-vector-icons/MaterialIcons';

export default function MessageScreen({icon,title,image, message,person= require('../ASSETS/girl.jpg')}) {
    return (
        <View style={styles.container}>
            <View style={styles.congrats}>
                <Icons name={icon} size={100} color="#FAFF00" />
                <View>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>
            <View style={styles.profileImage}>
                <EmptyLogoSvg profileImg={person} />
            </View>
            <View style={styles.message}>
                <Text style={styles.messageTxt}>{message}</Text>
            </View>
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
    congrats: {
        height: 300,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileImage: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 400,
        width: '100%',
    }, 
    whoAccepted: {
        height: '100%',
        width: '80%'
    },
    message: {
        height: 300,
        width: '100%',
        backgroundColor: 'transparent',
        padding:40
    },
    messageTxt:{
        color:colors.white,
        lineHeight:25,
        fontSize:16
    },
    title: {
        fontSize: 30,
        paddingVertical: 25,
        color: 'white'
    }
    ,
    image: {
        height: 100,
        width: 100
    },
   
})
