import React from 'react'
import { StyleSheet, Text, View,TextInput, TouchableNativeFeedback } from 'react-native'
import colors from '../../config/colors';
import Icons from 'react-native-vector-icons/MaterialIcons';


export default function InputBox() {
    return (
        <View style={styles.InputBox}>
            <View style={styles.firstPane}>
            <TextInput style={styles.textInput} 
            placeholder='Enter Message'
            />
           <Icons name='send' size={30} color={colors.white} />
            </View>

            <View style={styles.secondPane}>
                <TouchableNativeFeedback>
                <Icons name='camera' size={30} color={colors.white} />
                    </TouchableNativeFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    InputBox:{
        width:'100%',
        backgroundColor:colors.dark,
        color:colors.white,
        padding:5,
        flexDirection:'row',
        position:'absolute',
        bottom:0
    },
    firstPane:{
        width:'90%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    textInput:{
        borderRadius:10,
        width:'85%'
    },
    secondPane:{
        width:'10%',
        alignItems:'center',
        justifyContent:'center'
    },
})
