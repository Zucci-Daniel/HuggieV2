import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import colors from '../../config/colors'

export default function BubbleBorder({children}) {
    return (
        <View style={styles.border1}>
          <View style={styles.border2}>
        {children}
         </View>
        </View>
    )
}

const styles = StyleSheet.create({
    border1:{
        height:55,
        width:55, 
        borderRadius:100,
        borderColor:colors.pendingFaded,
        borderWidth:3,
        padding:1,
        justifyContent:'center',
        alignItems:'center',
    },
    border2:{
        backgroundColor:'white',
        height:45,
        width:45,
        borderRadius:100,
        borderColor:colors.pending,
        borderWidth:3,
        overflow:'hidden'
    },
  
})