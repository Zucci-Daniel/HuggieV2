import React,{useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import InputBox from '../COMPONENTS/chatComponents.js/InputBox'
import RecievedMessageBox from '../COMPONENTS/chatComponents.js/RecievedMessageBox'
import SentMessageBox from '../COMPONENTS/chatComponents.js/SentMessageBox'
import colors from '../config/colors'

export default function ChatScreen() {


    return (
        <View style={styles.eitherMessage}>
         <SentMessageBox />
         <RecievedMessageBox />
         <SentMessageBox />
         <SentMessageBox />
         <RecievedMessageBox />
         <InputBox />
        </View>
    )
}

const styles = StyleSheet.create({
    eitherMessage:{
        flex: 1,
        backgroundColor:colors.white,
        width:'100%'
    }
})
