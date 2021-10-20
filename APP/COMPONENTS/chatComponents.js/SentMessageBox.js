import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../config/colors'
import { scale,ScaledSheet } from 'react-native-size-matters';

export default function SentMessageBox() {
    return (
        <View style={styles.sentMessageWrapper}>
        <View style={styles.sentMessage}>
            <Text style={styles.messageText}>Sasha!, thanks for the green light.</Text>
             </View>
        </View>
    )
}

const styles = ScaledSheet.create({
    sentMessageWrapper:{
        backgroundColor:'transparent',
        width:'100%',
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingVertical:scale(10),
        paddingRight:scale(2)
    },
    sentMessage:{
        backgroundColor:colors.sentMessageBg,
        padding:scale(15),
        borderRadius:scale(10),
        fontSize:16
    },
    messageText:{
        color:colors.messageTextColor
    }
})
