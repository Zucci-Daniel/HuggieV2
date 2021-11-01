import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, TextInput, BackHandler } from 'react-native';
import IonicIcons from 'react-native-vector-icons/Ionicons';

function DetailsContainer({description, editDetails}) {
    const [editable, setEditable] = useState(false);
    const [text, setText] = useState();

    const edit = () => {
        setEditable(prev => !prev)
    }

    const submit = () => {
        editDetails(text);
        setEditable(prev => !prev)
    }

    let div = (
        <TouchableWithoutFeedback onPress={edit}>
            <View style={styles.detailsContainer}>
                <View style={styles.textContainer}>
                    <Text style={{color: '#000'}}>{description}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <IonicIcons name='pencil' color='#000' size={20} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
    if(editable){
        div = (
            <View style={styles.detailsContainer2}>
                <TextInput placeholder={description} style={styles.input} onChangeText={e => setText(e)} />
                <View style={styles.bottomContainer}>
                    <View style={styles.cancleBtn}>
                        <TouchableWithoutFeedback onPress={edit}>
                            <IonicIcons name='close' size={35} color='red' style={{opacity: 0.6}} />
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.cancleBtn}>
                        <TouchableWithoutFeedback onPress={() => submit()}>
                            <IonicIcons name='checkmark' color='blue' size={35} style={{opacity: 0.6}}  />
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
        )
    }

    return div;
}

const styles = StyleSheet.create({
    detailsContainer: {
        width: '100%',
        flexDirection:'row',
        paddingTop: 10,
        paddingBottom: 10
    },
    textContainer: {
        width: '90%',
        opacity: 0.9,
        paddingLeft: 10,
    },
    iconContainer: {
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.8
    },
    detailsContainer2: {
        width: '100%',
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 11,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4
    },
    input: {
        width: '95%',
        alignSelf: 'center',
    },
    bottomContainer: {
        flexDirection: 'row',
        marginBottom: 5
    },
    cancleBtn: {
        height: 40,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default DetailsContainer;