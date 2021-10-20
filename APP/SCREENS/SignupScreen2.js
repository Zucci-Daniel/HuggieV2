import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableWithoutFeedback } from 'react-native';
import axios from 'axios';

import {connect} from 'react-redux';
import * as actions from '../Redux/Actions/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

import DropDown from '../COMPONENTS/utilities/DropDown';
import DropDownModal from '../COMPONENTS/utilities/DropDownModal';
import LoadingScreen from '../COMPONENTS/loadingScreen';

import uni from '../ASSETS/uni.json';


const statusbarHeight = StatusBar.currentHeight;
const U1 = 'University';
const U2 = 'Polythecnic';
const U3 = 'College';
// Dropdown items
const institutions = [
    'University',
    'Polythecnic',
    'College',
]

function SignupScreen2({changeScreen}) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        unisSetter()
    },[]);

    const [Universities, setUniversities] = useState();

    const [items, setItems] = useState();
    const [inst, setInst] = useState('University');
    const [univ, setUniv] = useState();
    const [fullUniv, setFullUniv] = useState();
    const [dept, setDept] = useState();
    const [lev, setLev] = useState();

    const unisSetter = () => {
        const arr = [];
        if(uni){
            Object.keys(uni).map((keyName, i) => {
                arr.push(keyName)
            });
            setUniversities(arr)
        }
        
    }

    const onPress = (data) => {
        setItems(data);
    }

    const drop1 = (name) => {
        if(name === U1 || name === U2 || name === U3){
            setTimeout(() => {
                setItems();
                setInst(name)
            }, 100)
        }else{
            setTimeout(() => {
                setItems();
                nameShotter(name)
            }, 100)
        }
    };

    const nameShotter = (name) => {
        const ArrName = name.split('');
        if(ArrName.length > 17){
            const NewName = ArrName.slice(0, 16);
            const finalName = NewName.join('') + '...';
            setUniv(finalName);
            setFullUniv(name);
        }else{
            setUniv(name)
        }
    }

    const submit = async () => {
        const sex = await AsyncStorage.getItem('sex');
        const id = await AsyncStorage.getItem('@id');
        const token = await AsyncStorage.getItem('authToken')

        const description = 'I am a ' + lev + 'lv student' + ' at ' + fullUniv

        const data = {
            token: token,
            id: id,
            sex: sex,
            institution: fullUniv,
            department: dept,
            level: lev,
            description: description
        }
        // console.log(data);
        postData(data);
        // AsyncStorage.clear();
    }

    const postData = (data) => {
        const formdata = new FormData();
        let sex = data.sex;
        const newSex = sex.toLowerCase();
        formdata.append('sex', newSex);
        formdata.append('institution', data.institution);
        formdata.append('department', data.department);
        formdata.append('level', data.level + 'L');
        setLoading(true);

        axios.put('https://huggie.herokuapp.com/api/profiles/'+data.id+'/', formdata, {
            headers: {
                'Authorization': 'JWT ' + data.token,
                redirect: 'follow'
            }
        })
        .then(r => {
            console.log(r.data);
            setLoading(false);
            changeScreen(2, data)
        })
        .catch(e => {
            if(e.response.data){
                alert(e.response.data.detail);
            }else{
                alert(e)
            }
            setLoading(false);
        })
    }

    let div = (
        <DropDown name={!univ ? `select a ${inst}` : univ } width={'75%'} data={Universities} onPress={onPress} />
    )
    if(inst === U2){
        div = <DropDown name={!univ ? `select a ${inst}` : univ } width={'75%'} data={Universities} onPress={onPress} />
    }else if(inst === U3){
        div = <DropDown name={!univ ? `select a ${inst}` : univ } width={'75%'} data={Universities} onPress={onPress} />
    }

    return (
        <View style={styles.container} >
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={styles.topContainer}>
                <Text style={styles.intro}>Welcome to Huggie</Text>
                <Text style={styles.intro2}>Students Dating Platform</Text>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.bottomTextHeader}>Tell Us A Bit About Yourself</Text>
                <View style={styles.inputContainer}>
                    <DropDown name={inst} width={'55%'} data={institutions} onPress={onPress} />
                    {div}
                    <TextInput placeholder='Department' style={styles.input} placeholderTextColor={'#000'} onChangeText={(text) => setDept(text) } />
                    <TextInput placeholder='Level' keyboardType='numeric' style={[styles.input, {width: 100}]} placeholderTextColor={'#000'} onChangeText={(text) => setLev(text)} />
                </View>
            </View>
            {items ? <DropDownModal data={items} onPress={drop1} /> : null }   
            <View style={styles.bottomNav}>
                <View style={[styles.box1, {backgroundColor:'#fff'}]} />
                <TouchableWithoutFeedback onPress={submit}>
                    <View style={[styles.box1, {backgroundColor: '#E51D7D'}]}>
                        <Text style={{fontWeight: '700', color: '#fff'}}>I'm Done</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            {loading ?
                <LoadingScreen />
            : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    topContainer: {
        width: '100%',
        backgroundColor: '#DE5295',
        paddingTop: statusbarHeight,
        paddingBottom: 25
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
    bottomContainer: {
        height: '75%',
    },
    bottomTextHeader: {
        fontSize: 20,
        paddingLeft: '7%',
        paddingTop: 15,
        letterSpacing: 1,
        opacity: 0.8
    },
    inputContainer: {
        height: 250,
        width: "100%",
        paddingTop: 20
    },
    input: {
        height: 45,
        width: 200,
        backgroundColor: '#f0f0f0',
        marginLeft: '7%',
        borderRadius: 7,
        paddingLeft: 15,
        fontSize: 17,
        marginBottom: 15
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
    }
})

export default SignupScreen2;