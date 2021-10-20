import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import {connect} from 'react-redux';
import * as actionTypes from '../Redux/Actions/actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';


import SignupScreen from './SignupScreen';
import SignupScreen2 from './SignupScreen2';
import LogoutBtn  from '../COMPONENTS/utilities/LogoutBtn';
import ContainerScreen from '../COMPONENTS/ContainerScreen';

function MainScreen(props) {
    const [screen, setScreen] = useState();

    useEffect(() =>{
        authChecker();
    }, []);

    const authChecker = async () => {
        try {
            const data = await AsyncStorage.getItem('authToken');
            if(data){
                props.isSignup(data)
            }
          } catch (error) {
            console.log(error, 'err');
          }
    }

    return (
        <>
            {!props.auth ? <SignupScreen /> : <ContainerScreen /> }
        </>
    );
}

const mapStateToProps = (state) => {
    return{
        auth: state.is_signup,
        nextScreen: state.nextScreen
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        isSignup: (value) => dispatch({type: actionTypes.IS_SIGNUP, value: value })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);