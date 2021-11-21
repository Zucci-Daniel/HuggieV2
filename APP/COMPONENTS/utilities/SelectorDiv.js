import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

function SelectorDiv({name, active, selected}) {

    let div = (
        <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>
        </View>
    )
    if(active == name){
        div = (
            <View style={[styles.container, {backgroundColor: '#DE5295'}]}>
                <Text style={styles.text, {color: '#fff'}}>{name}</Text>
            </View>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => selected(name)}>
            {div}
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 36,
        width: 120,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#DE5295',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:22
    },
    text: {
        color: '#DE5295',
        fontWeight: 'bold',
        marginTop: -3
    }
})

export default SelectorDiv;