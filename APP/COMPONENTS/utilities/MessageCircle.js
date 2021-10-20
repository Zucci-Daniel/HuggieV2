
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../config/colors'

export default function MessageCircle() {
    return (
        <View style={styles.messagesCircle}>
        <Text style={styles.messageNumber}>4</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    messagesCircle: {
        backgroundColor: colors.brandColor,
        // padding:5,
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderRadius: 150,
        height:15,
        width:15
    },
    messageNumber: {
        color: colors.white,
        fontSize: 11,
        fontWeight: 'bold',
        // padding:5
    }
})
