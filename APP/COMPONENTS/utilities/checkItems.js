import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

function checkItems({name, activ, onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.checkbox}>
                <View style={[styles.circle, !activ ? {backgroundColor: '#DE5295'} : null ]}></View>
                <Text style={{opacity: 0.7, marginLeft: 8}}>{name}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    checkbox: {
        height: 30,
        width: 80,
        flexDirection: 'row',
        alignItems: 'center',
    },
    circle: {
        height: 15,
        width: 15,
        borderRadius: 5,
        backgroundColor: '#AFAFAF4A'
    }
})
export default checkItems;