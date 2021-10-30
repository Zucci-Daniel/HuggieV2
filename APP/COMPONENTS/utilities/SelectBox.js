import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../config/colors'

export default function SelectBox({ likes }) {
    let container = (
        <View style={styles.SelectBox}>
            <View style={{ alignSelf: 'center', padding: '5%' }} >
                <Text style={styles.text}>{likes}</Text>
            </View>
        </View>
    )
    return (
        <>
            {likes ? container : null}
        </>
    )
}

const styles = StyleSheet.create({
    SelectBox: {
        backgroundColor: colors.selectionPane,
        paddingHorizontal: '2%',
        borderRadius: 15,
        marginBottom: '2%',
        marginRight: '1%'
    },
    text: {
        color: colors.white
    }
})
