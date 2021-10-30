import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SignupScreen2 from '../SCREENS/SignupScreen2';
import SignupScreen3 from '../SCREENS/SignupScreen3';
import InsideApp from '../APP_NAVIGATION/InsideApp';

function ContainerScreen() {
    const [screen, setScreen] = useState(1);
    const [data, setData] = useState();

    useEffect(() => {
        newFunc()
    }, []);

    const newFunc = async () => {
        const datae = await AsyncStorage.getItem('loginId');
        if(datae){
            setScreen();
        };
    }

    const changeScreen = (value, paraData) => {
        setScreen(value);
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
                {data ? <SignupScreen3 data={data} clearScreen={() => setScreen()} /> : null }
            </>
        )
    }

    return (
        <>
            {!screen ? <InsideApp/> : div }
        </>
    );
}

export default ContainerScreen;