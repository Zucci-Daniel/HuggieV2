import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import IonicIcons from 'react-native-vector-icons/Ionicons';

function DetailsContainer({description}) {
    return (
        <View style={styles.detailsContainer}>
            <View style={styles.textContainer}>
                <Text>{description}</Text>
            </View>
            <View style={styles.iconContainer}>
                <IonicIcons name='pencil' color='#000' size={16} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        width: '100%',
        borderWidth: 1,
        flexDirection:'row',
    },
    textContainer: {
        width: '90%',
        borderWidth: 1,
    },
    iconContainer: {
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default DetailsContainer;