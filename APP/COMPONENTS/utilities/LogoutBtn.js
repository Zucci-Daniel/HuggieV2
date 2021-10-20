import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import {connect} from 'react-redux';
import * as actionTypes from '../../Redux/Actions/actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LogoutBtn(props) {
    const logoutButton = async () => {
        AsyncStorage.clear();
        props.logout();
    }
    return (
        <TouchableWithoutFeedback onPress={logoutButton}>
            <View style={styles.container}>
                <Text style={{color: '#fff'}}>logout</Text>
            </View>
        </TouchableWithoutFeedback>
        
    );
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: '100%',
        backgroundColor: 'red',
        borderRadius: 15
    }
})

const mapDispatchToPops = (dispatch) => {
    return{
        logout: () => dispatch({type:actionTypes.IS_SIGNUP, value: null})
    }
}

export default connect(null, mapDispatchToPops)(LogoutBtn);