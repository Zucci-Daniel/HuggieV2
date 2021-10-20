import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import AppHotImage from '../COMPONENTS/AppHotImage'
import colors from '../config/colors'


export default function HotGallery({children,key}) {
    return (
        <View style={styles.container}>
           {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
        width:'100%',
        height:Dimensions.get('window').height * 1,
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center'
    }
})
