import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import { View } from 'react-native';

import SignupScreen2 from '../SCREENS/SignupScreen2';
import SignupScreen3 from '../SCREENS/SignupScreen3';
import InsideApp from '../APP_NAVIGATION/InsideApp';

function ContainerScreen(props) {
    const [screen, setScreen] = useState();
    const [data, setData] = useState();

    // useEffect(() => {
    //     newFunc()
    // }, []);

    // useEffect(() => {
    //     console.log(props.screen)
    // }, [props.screen])

    const newFunc = async () => {
        const datae = await AsyncStorage.getItem('loginId');
        if(datae){
            setScreen();
        };
    }

    const changeScreen = (value, paraData) => {
        props.setScreen(2);
        setData(paraData);
    }

    let div = (
        <>
            <SignupScreen2 changeScreen={changeScreen} />
        </>
    )
    if(screen === 2){
        div = (
            <>
                {data ? <SignupScreen3 data={data} clearScreen={props.clearScreen(null)} /> : null }
            </>
        )
    }

    return (
        <>
            {!props.screen ? <InsideApp/> : div }
            {/* <View style={{backgroundColor: 'red', height: '100%', width: '100%'}}></View> */}
        </>
    );
}

const mapStateToProps = state => {
    return{
        screen: state.screen
    }
}

const mapDispatchToProps = dispatch => {
    return{
        clearScreen: (value) => dispatch({type: 'SCREEN', value: value})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerScreen);