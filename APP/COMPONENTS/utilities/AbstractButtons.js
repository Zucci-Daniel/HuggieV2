import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


function AbstractButtons({icon, name}) {
    return (
        <View style={{width: '50%', alignItems: 'center'}}>
            <View style={styles.container}>
                <Image source={icon} style={{height: 16, width: 16, marginRight: 10}} />
                <Text style={{fontSize: 15}}>{name}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default AbstractButtons;