import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../config/colors';


export default function DateButton({ extraStyle,evelopeSize=80,heartSize=40 }) {
    return (
        <TouchableHighlight style={extraStyle}>
            <View style={styles.icon} >
                <FontAwesome style={styles.envelope} name="envelope" size={evelopeSize} color={colors.brandColor} />
                <FontAwesome style={styles.heart} name="heart" size={heartSize} color={colors.brandColor} />
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    envelope: {
        position: 'relative',
        color: 'rgba(225,225,200,1.4)',
      
    },
    heart: {
        position: 'absolute',
        left: 20,
        bottom: 15
    },
})
