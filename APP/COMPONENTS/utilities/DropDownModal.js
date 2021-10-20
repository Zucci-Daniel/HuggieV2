import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import DropDownItem from './DropDownItem';

function DropDownModal({data, onPress}) {
    const [item, setItem] = useState();
    useEffect(() => {
        if(data){
            setItem(data);
        }
    },[]); 

    return (
        <View style={styles.container}>
            {item ? 
                <View style={styles.mainContainer}>
                    <ScrollView>
                    {item.map(i => (
                        <DropDownItem key={i} name={i} onPress={() => onPress(i)} />
                    ))}
                    </ScrollView>
                </View>
            : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        top: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainContainer: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingTop: 20,
        paddingBottom: 25,
        maxHeight: '80%'
    }
})

export default DropDownModal;