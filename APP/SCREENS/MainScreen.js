import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import {connect} from 'react-redux';
import * as actionTypes from '../Redux/Actions/actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from './LoadingScreen';


import SignupScreen from './SignupScreen';
import SignupScreen2 from './SignupScreen2';
import LogoutBtn  from '../COMPONENTS/utilities/LogoutBtn';
import ContainerScreen from '../COMPONENTS/ContainerScreen';
import InsideApp from '../APP_NAVIGATION/InsideApp';
import SignupScreen3 from './SignupScreen3';

function MainScreen(props) {
    const [data, setData] = useState();
    const [mainScreen, setMainScreen] = useState(null);

    useEffect(() =>{
        authChecker();
    }, []);

    useEffect(() => {
        console.log(mainScreen, 'mockingBird');
        if(props.screen){
            setMainScreen(props.screen)
        }
    }, [props.screen])

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

    const changeScreen = (value, paraData) => {
        props.clearScreen(2);
        setData(paraData);
    }

    let div = null
    if(!props.auth){
        div = <SignupScreen />
    }

    let container = <InsideApp />
    if(mainScreen === 1){
        container = <SignupScreen2 changeScreen={changeScreen} />
    }else if(mainScreen === 2){
        container = <SignupScreen3 data={data} clearScreen={() => setMainScreen(null)} />
    }else if(mainScreen === null){
        container = <InsideApp />
    }

    return (
        <>
            {!props.auth ? div : container }
        </>
    );
}

const mapStateToProps = (state) => {
    return{
        auth: state.is_signup,
        screen: state.screen
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        isSignup: (value) => dispatch({type: actionTypes.IS_SIGNUP, value: value }),
        clearScreen: (value) => dispatch({type: 'SCREEN', value: value})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);