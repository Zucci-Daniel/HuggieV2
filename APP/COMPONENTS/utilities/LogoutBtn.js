import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import {connect} from 'react-redux';
import * as actionTypes from '../../Redux/Actions/actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { scale } from 'react-native-size-matters';

function LogoutBtn(props) {
    const logoutButton = async () => {
        AsyncStorage.clear();
        props.logout();
    }
    return (
        <TouchableWithoutFeedback onPress={logoutButton}>
            <View style={styles.container}>
                <Text style={{color: '#fff', fontWeight: 'bold', letterSpacing: 1}}>logout</Text>
            </View>
        </TouchableWithoutFeedback>
        
    );
}

const styles = StyleSheet.create({
    container: {
        height: scale(50),
        width: '70%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#DE5295',
        borderRadius: scale(25),
        marginBottom: 50,
        marginTop: 50
    }
})

const mapDispatchToPops = (dispatch) => {
    return{
        logout: () => dispatch({type:actionTypes.IS_SIGNUP, value: null})
    }
}

export default connect(null, mapDispatchToPops)(LogoutBtn);