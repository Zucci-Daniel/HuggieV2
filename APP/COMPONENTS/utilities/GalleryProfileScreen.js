import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import colors from '../../config/colors';
import AppIcon from './AppIcon';
import PersonalityBoxes from './PersonalityBoxes';
import UserShowCaseInitials from './UserShowCaseInitials';
import { scale,ScaledSheet } from 'react-native-size-matters';
import Logout from '../Logout';



export default function GalleryProfilePictureScreen({ picture }) {
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.GalleryProfilePicture}>
                <View style={styles.picture}>
                    <Image source={require('../../ASSETS/jackson.jpg')} style={styles.image} resizeMode="cover" />
                    {/* <AppIcon extraStyle={styles.cameraIcon} /> */}
                </View>
                <UserShowCaseInitials />
                <View style={styles.PersonalityBoxesWrapper}>
                    <PersonalityBoxes />
                    <PersonalityBoxes />
                    <PersonalityBoxes />
                    <PersonalityBoxes />
                </View>
            </View>


<Logout />
        </ScrollView>
    )
}

const styles = ScaledSheet.create({

    scrollView:{
        position:'relative'
    },
    GalleryProfilePicture: {
        width: '100%',
        height: 2000,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: scale(10)
    },
    picture: {
        width: '95%',
        height: Dimensions.get('window').height / 2,
        backgroundColor: colors.white,
        borderRadius: scale(20),
        overflow: 'hidden',
        position: 'relative'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    cameraIcon: {
        position: 'absolute',
        bottom: 0,
        color: colors.brandColor,
        left: scale(20),
        bottom: scale(20),
    },
    PersonalityBoxesWrapper: {
        width: '90%',
        flex: 1,
        flexDirection: 'row'
    }
})
