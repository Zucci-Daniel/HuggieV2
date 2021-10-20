import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../config/colors'
import { scale,ScaledSheet } from 'react-native-size-matters';

export default function RecievedMessageBox() {
    return (
        <View style={styles.recievedMessageWrapper}>
        <View style={styles.recievedMessage}>
            <Text style={styles.messageText}>No need for thanking me, you’re cute, i had no choice</Text>
             </View>
        </View>
    )
}

const styles = ScaledSheet.create({
    recievedMessageWrapper:{
        backgroundColor:'transparent',
        width:'100%',
        flexDirection:'row',
        justifyContent:'flex-start',
        paddingVertical:scale(10),
        paddingRight:scale(2)
    },
    recievedMessage:{
        backgroundColor:colors.recievedMessageBg,
        padding:scale(15),
        borderRadius:scale(10),
        fontSize:scale(16)
    },
    messageText:{
        color:colors.white
    }
})
