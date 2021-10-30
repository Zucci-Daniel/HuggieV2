import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';
import { scale, ScaledSheet} from 'react-native-size-matters';
import DropDown from './utilities/DropDown';
import DropDownModal from './utilities/DropDownModal';

import uni from '../ASSETS/uni.json';
import IonicIcon from 'react-native-vector-icons/Ionicons';

const U1 = 'University';
const U2 = 'Polythecnic';
const U3 = 'College';

const institutions = [
    'University',
    'Polythecnic',
    'College',
]

function EditUserDetailsScreen({closeModal, postUpdatedDetails}) {
    const [Universities, setUniversities] = useState();

    const [items, setItems] = useState();
    const [inst, setInst] = useState('University');
    const [univ, setUniv] = useState();
    const [fullUniv, setFullUniv] = useState();
    const [dept, setDept] = useState();
    const [lev, setLev] = useState();

    const onPress = (data) => {
        setItems(data);
        console.log(data)
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
        postUpdatedDetails(fullUniv, dept, lev)
    }

    const cancle = () => {
        closeModal()
    }

    let div = (
        <DropDown name={!univ ? `select a ${inst}` : univ } width={'75%'} data={Universities} onPress={onPress} />
    )
    if(inst === U2){
        div = <DropDown name={!univ ? `select a ${inst}` : univ } width={'75%'} data={Universities} onPress={onPress} />
    }else if(inst === U3){
        div = <DropDown name={!univ ? `select a ${inst}` : univ } width={'75%'} data={Universities} onPress={onPress} />
    }

    const button2 = (
        <View style={styles.otherBtns}>
            <TouchableWithoutFeedback onPress={submit}>
                <View style={styles.editBtn}>
                    <Text style={styles.text}>Submit</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={cancle}>
                <View style={styles.cancleBtn}>
                    <IonicIcon name='close' color='#fff' size={20} />
                </View>
            </TouchableWithoutFeedback>
        </View>
    )

    return (
        <>
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Edit School Details</Text>
                <View style={styles.headerLine} />
            </View>
            <View style={{marginTop: 20}}>
                <DropDown name='University' width={'60%'} data={institutions} onPress={onPress} />
                {div}
                <TextInput placeholder='Department' style={styles.input} placeholderTextColor={'#000'} onChangeText={(text) => setDept(text) } />
                <TextInput placeholder='Level' keyboardType='numeric' style={[styles.input, {width: 100}]} placeholderTextColor={'#000'} onChangeText={(text) => setLev(text)} />
            </View>
            <View style={styles.submitButtons}>
                {button2}
            </View>
        </View>
        {items ? <DropDownModal data={items} onPress={drop1} /> : null }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        position: 'absolute',
        top: 0
    },
    header: {
        height: scale(60),
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        color: '#000',
        letterSpacing: 1,
        fontSize: 17,
        opacity: 0.8
    },
    headerLine: {
        height: scale(4),
        width: '25%',
        borderRadius: 10,
        backgroundColor: '#DE5295',
        marginTop: scale(10)
    },
    input: {
        height: 45,
        width: 200,
        backgroundColor: '#f0f0f0',
        marginLeft: '7%',
        borderRadius: 7,
        paddingLeft: 15,
        fontSize: 17,
        marginBottom: 15,
        letterSpacing: 1.5
    },
    submitButtons: {
        height: scale(50),
        width: '100%',
        marginTop: scale(30)
    },
    otherBtns: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    cancleBtn: {
        height: scale(40),
        width: scale(40),
        borderRadius: 40,
        backgroundColor: '#E92347',
        marginLeft: scale(15),
        alignItems: 'center',
        justifyContent: 'center'
    },
    editBtn:{
        height: scale(44),
        width: scale(100),
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 22,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#DE5295',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#DE5295',
        fontWeight: 'bold',
        letterSpacing: 1
    }
})

export default EditUserDetailsScreen;