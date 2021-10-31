import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableWithoutFeedback } from 'react-native';

import Search from '../ASSETS/lens.png'
import SelectorDiv from '../COMPONENTS/utilities/SelectorDiv';
import DropDown from '../COMPONENTS/utilities/DropDown';
import DropDownModal from '../COMPONENTS/utilities/DropDownModal';
import uni from '../ASSETS/uni.json';

const U1 = 'University';
const U2 = 'Polythecnic';
const U3 = 'College';

const institutions = [
    'University',
    'Polythecnic',
    'College',
]

function SearchScreen(props) {
    const [active, setActive] = useState('female');

    const [Universities, setUniversities] = useState();
    const [items, setItems] = useState();
    const [inst, setInst] = useState('University');
    const [univ, setUniv] = useState();
    const [fullUniv, setFullUniv] = useState();
    const [lev, setLev] = useState();

    const selected = (name) => {
        if(name == active){}else{
            setActive(name)
        }
    }

    const onPress = (data) => {
        setItems(data)
    }

    useEffect(() => {
        unisSetter()
    },[]);

    const unisSetter = () => {
        const arr = [];
        if(uni){
            Object.keys(uni).map((keyName, i) => {
                arr.push(keyName)
            });
            setUniversities(arr)
        }
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

    const submit = () => {
        console.log(fullUniv, active, lev)
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
        <View style={styles.container}>
            <View style={styles.canva}>
                <Image source={Search} style={styles.img2} />
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.header}>
                    <Text style={styles.headertext}>Filter Search</Text>
                    <View style={styles.lineDiv} />
                </View>
                <View style={styles.Div1}>
                    <Text style={styles.text}>Search Gender by?</Text>
                    <View style={styles.row}>
                        <SelectorDiv name='male' active={active} selected={selected} />
                        <SelectorDiv name='female' active={active} selected={selected} />
                    </View>
                </View>
                <View style={styles.Div2}>
                    <Text style={styles.text}>Search University and level ...</Text>
                    <DropDown name='University' width={'60%'} data={institutions} onPress={onPress} />
                    {div}
                    <TextInput placeholder='Level' keyboardType='numeric' style={[styles.input, {width: 100}]} placeholderTextColor={'#000'} onChangeText={(text) => setLev(text)} />
                </View>
                <TouchableWithoutFeedback onPress={submit}>
                    <View style={styles.continueBtn}>
                        <Text style={styles.continueText}>continue</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            {items ? <DropDownModal data={items} onPress={drop1} /> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
    },
    canva: {
        height: '100%',
        width: '100%',
    },
    img1: {
        height: 70,
        width: 70,
        opacity: 0.8,
    },
    img2: {
        height:120,
        width: 120,
        opacity: 0.5,
        position: 'absolute',
        right: -20,
        bottom: 30
    },
    mainContainer: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0
    },
    header: {
        height: 40,
        width: '100%',
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headertext:{
        fontWeight: '600',
        fontSize: 16,
        color: '#000',
        letterSpacing: 1
    },
    lineDiv: {
        height: 4,
        width: '40%',
        borderRadius: 2,
        backgroundColor: '#DE5295',
        marginTop: 7
    },
    Div1: {
        width: '100%',
        marginTop: 20
    },
    text: {
        color: '#000',
        fontSize: 17,
        opacity: 0.7,
        marginLeft: 20,
        marginBottom: 10
    },
    row: {
        flexDirection: 'row'
    },
    Div2: {
        width: '100%',
        marginTop: 30
    },
    input: {
        height: 45,
        width: 200,
        backgroundColor: '#f0f0f0',
        marginLeft: '7%',
        borderRadius: 7,
        paddingLeft: 15,
        fontSize: 16,
        marginBottom: 15,
        letterSpacing: 1.5
    },
    continueBtn: {
        height: 50,
        width: '100%',
        position: 'absolute',
        bottom: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    continueText: {
        fontWeight: 'bold',
        color: '#DE5295',
        fontSize: 19,
        letterSpacing: 2
    }
})

export default SearchScreen;