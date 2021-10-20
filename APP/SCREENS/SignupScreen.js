import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, StatusBar, Dimensions, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import {connect} from 'react-redux';
import * as signupActions from '../Redux/Actions/index';

import AbstractButtons from '../COMPONENTS/utilities/AbstractButtons';

//icons
import fbIcon from '../ASSETS/fb.png';
import GoogleIcon from '../ASSETS/search.png'
import CheckBoxes from '../COMPONENTS/utilities/CheckBoxes';
import LoadingScreen from '../COMPONENTS/loadingScreen';

const statusbarHeight = StatusBar.currentHeight;
const width = Dimensions.get('screen').width;

function SignupScreen(props) {
    const [login, setLogin] = useState(false);
    const [passMismatch, setPassMismatch] = useState(false);
    const [passLength, setPassLength] = useState(true);

    //FormData
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [sex, setSex] = useState('Male');

    //Login field
    const [logUsername, setLoginUsername] = useState();
    const [logPassword, setLogPassword] = useState();

    const loginBtn = () => {
        if(!login){
            setLogin(true)
        }else {
            setLogin(false)
        }
    };

    const submit = () => {
        const data = {
            username: username,
            email: email,
            password: password,
            sex: sex
        }
        const data2 = {
            username: logUsername,
            password: logPassword
        }
        if(!login){
            props.Signup(data,1);
        }else{
            props.Signin(data2)
        }
    }

    const passChecker = (text) => {
        setPassword(text)
        if(text.length > 6){
            setPassLength(true)
        }else{
            setPassLength(false)
        }
    }

    const passwordChecker = (text) => {
        if(text === password){
            setPassMismatch(false)
        }else{
            setPassMismatch(true)
        }
    }

    const sexChecker = (gender) => {
        setSex(gender)
    }

    let div = (
        <View style={styles.inputsContainer}>
            <TextInput placeholder='Username' style={styles.input} placeholderTextColor={'#000'} onChangeText={(text) => setUsername(text)} />
            <TextInput placeholder='Email' keyboardType='email-address' style={styles.input} placeholderTextColor={'#000'} onChangeText={(text) => setEmail(text)} />
            <View style={styles.passwordContainer}>
                <View style={{width: '50%', alignItems: 'flex-start'}}>
                    <TextInput placeholder='Password' style={[styles.input, {width: '95%'}]} secureTextEntry placeholderTextColor={'#000'} onChangeText={(text) => passChecker(text)} />
                </View>
                <View style={{width: '50%', alignItems: 'flex-end'}}>
                    <TextInput placeholder='Confirm Password' style={[styles.input, {width: '95%'}]} secureTextEntry placeholderTextColor={'#000'} onChangeText={text => passwordChecker(text)} />
                </View>
            </View>
            {passMismatch ? <Text style={styles.mismatchPass}>Password field dosen't match</Text> : null }
            {!passLength ? <Text style={styles.mismatchPass}>Password too short</Text> : null }
            <CheckBoxes sexChecker={sexChecker} />
        </View>
    )
    if(login){
        div = (
            <View style={styles.inputsContainer}>
                <KeyboardAvoidingView behavior='position'>
                    <TextInput placeholder='Username' style={styles.input} placeholderTextColor={'#000'} onChangeText={text => setLoginUsername(text)} />
                    <TextInput placeholder='Password' style={styles.input} secureTextEntry placeholderTextColor={'#000'} onChangeText={text => setLogPassword(text)} />
                </KeyboardAvoidingView>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={styles.topContainer}>
                <Text style={styles.intro}>{!login ? 'Welcome' : 'Login'} to Huggie {props.is_signup}</Text>
                <Text style={styles.intro2}>Students Dating Platform</Text>
                <View style={styles.bottomTop}>
                    <Text style={styles.signupText}>{!login ? 'Sign up' : 'Login'} using</Text>
                    <View style={styles.buttonsContainer}>
                        <AbstractButtons name='Google' icon={GoogleIcon} />
                        <AbstractButtons name='Facebook' icon={fbIcon} />
                    </View>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.bottomTextHeader}>{!login ? 'Or Create a new account' : 'Login With Email' }</Text>
                {div}
            </View>
            <View style={styles.bottomNav}>
                <TouchableWithoutFeedback onPress={loginBtn}>
                    <View style={styles.box1}>
                        <Text style={{fontWeight: '600'}}>{!login ? 'Login' : 'Sign up'} Instead</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={submit}>
                    <View style={[styles.box1, {backgroundColor: '#E51D7D'}]}>
                        <Text style={{fontWeight: '700', color: '#fff'}}>I'm Done</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            {props.loading ? 
                <LoadingScreen />
            : null}
        </View>
    );
};

const mapStateToProps = (state) => {
    return{
        token: state.token,
        loading: state.loading,
        is_signup: state.is_signup
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        // Signup: (data) => dispatch(signupActions.signup(data))
        Signup: (data, type) => dispatch(signupActions.Auth(data, type)),
        Signin: (data) => dispatch(signupActions.login(data))
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF',
    },
    topContainer: {
        height: '40%',
        width: '100%',
        backgroundColor: '#DE5295',
        paddingTop: statusbarHeight,
    },
    intro: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 25,
        fontFamily: 'verdana',
        width: 160,
        marginTop: 20,
        marginLeft: '7%'
    },
    intro2: {
        color: '#fff',
        paddingTop: 10,
        fontSize: 15,
        letterSpacing: 1,
        marginLeft: '7%'
    },
    bottomTop: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingBottom:20
    },
    signupText: {
        color: '#fff',
        opacity: 0.5,
        letterSpacing: 1,
        fontSize: 15,
        paddingLeft: 20,
        paddingBottom: 10
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomTextHeader: {
        fontSize: 20,
        paddingLeft: '7%',
        paddingTop: 15,
        letterSpacing: 1,
        opacity: 0.9
    },
    inputsContainer: {
        width: '85%',
        alignSelf: 'center',
        marginTop: 12
    },
    input: {
        height: 43,
        width: '100%',
        backgroundColor: '#AFAFAF4A',
        borderRadius: 7,
        paddingLeft: 15,
        marginBottom: 15,
        color: '#000',
    },
    passwordContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    bottomNav: {
        height: 55,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row'
    },
    box1: {
        height: 55,
        width: '50%',
        backgroundColor: '#CFCBCB',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '600'
    },
    mismatchPass: {
        color: 'red',
        marginBottom: 5
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);