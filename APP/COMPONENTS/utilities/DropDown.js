import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { scale } from 'react-native-size-matters';
import Icons from 'react-native-vector-icons/AntDesign';

function DropDown({name, width, data, onPress}) {
    return (
        <TouchableWithoutFeedback onPress={() => onPress(data)}>
            <View style={[styles.container, {width: width}]}>
                <View style={{width: '75%'}}>
                    <Text style={styles.Text}>{name}</Text>
                </View>
                <View style={{width: '25%', alignItems: 'center', justifyContent: 'center'}}>
                    <Icons name='down' size={14} color="#000" style={styles.arrow} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: 150,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        backgroundColor: '#f0f0f0'
    },
    Text: {
        fontSize: 16,
        letterSpacing: 1.5,
        marginLeft: scale(15),
        color: '#000',
        opacity: 0.8
    },
    arrow: {
        opacity: 0.8
    }
})

export default DropDown;