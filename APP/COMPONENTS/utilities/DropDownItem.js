import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

function DropDownItem({name, onPress}) {
    const [color, setColor] = useState('#AFAFAF4A');

    const colorChanger = () => {
        setColor('#DE5295');
        onPress()
    }
    return (
        <TouchableWithoutFeedback onPress={colorChanger}>
            <View style={styles.container}>
                <Text style={styles.Text}>{name}</Text>
                <View style={[styles.circle, {backgroundColor: color}]}></View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    Text: {
        fontSize: 17,
        opacity: 0.8,
        paddingLeft: 15,
        letterSpacing : 1,
        width: '85%'
    },
    circle: {
        height: 17,
        width: 17,
        borderRadius: 20,
        backgroundColor: '#AFAFAF4A',
        position: 'absolute',
        right: 15
    }
})

export default DropDownItem;