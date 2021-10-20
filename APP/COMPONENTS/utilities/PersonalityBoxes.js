import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

function PersonalityBoxes({name, width, fs, fe, item, itemAdder, itemRemover}) {
    const  [clicked, setClicked] = useState(false);

    const onClick = () => {
        if(!clicked){
            setClicked(true);
            itemAdder(name)
        }else{
            setClicked(false);
            itemRemover(name)
        }
        
    };

    return (
        <View style={[{width: width, alignItems: 'center'}, fs ? {alignItems: 'flex-start'} : null, fe ? {alignItems: 'flex-end'} : null ]}>
            <TouchableWithoutFeedback onPress={onClick}>
                <View style={[styles.container, clicked ? {backgroundColor: '#DE5295', borderWidth: 0, opacity: 1} : null ]}>
                    <Text style={[styles.text, clicked ? {color: '#fff'} : null ]}>{name}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 35,
        width: '90%',
        borderRadius: 18,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        opacity: 0.7
    },
    text: {
        fontWeight: '700',
        letterSpacing: 1
    }
})

export default PersonalityBoxes;