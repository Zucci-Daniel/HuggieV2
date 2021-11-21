import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../config/colors';
import Icons from 'react-native-vector-icons/Ionicons';
import { scale,ScaledSheet } from 'react-native-size-matters';



export default function ChatHeader({ onPress, screenTitle, screenImage, onlyTitle,navigation }) {
    return (
        <View style={styles.ChatHeader}>
            <Icons name="md-chevron-back-outline" onPress={onPress} size={30} color={colors.white} />
            <View style={styles.chatUserNameHeader}>
                <View style={styles.userImageWrapper}>
                    <Image source={screenImage} style={styles.userImage} />
                </View>
                <Text style={styles.screenTitle}>{screenTitle}</Text>
            </View>
        </View>
    )
}

const styles = ScaledSheet.create({
    ChatHeader: {
        backgroundColor: colors.brandColor,
        padding: '3@s',
        paddingLeft: '5@s',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    chatUserNameHeader: {
        marginLeft: '3@s',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    userImageWrapper: {
        height: scale(40),
        width: scale(40),
        borderRadius: scale(100),
        overflow: 'hidden'
    },
    screenTitle: {
        color: colors.white,
        marginLeft: '5@s'

    },
    userImage: {
        height: '100%',
        width: '100%'
    }
})
