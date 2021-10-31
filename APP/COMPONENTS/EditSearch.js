import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, Modal, TextInput, TouchableWithoutFeedback } from 'react-native';
import DropDown from './utilities/DropDown';

import IonicIcon from 'react-native-vector-icons/MaterialIcons';
import uni from '../ASSETS/uni.json';
import DropDownModal from './utilities/DropDownModal';
import { scale } from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';

const U1 = 'University';
const U2 = 'Polythecnic';
const U3 = 'College';

const institutions = [
    'University',
    'Polythecnic',
    'College',
]

function EditSearch({data}) {
    const [edit, setEdit] = useState(false);
    const [Universities, setUniversities] = useState();
    const [items, setItems] = useState();
    const [inst, setInst] = useState('University');
    const [univ, setUniv] = useState();
    const [fullUniv, setFullUniv] = useState();
    const [lev, setLev] = useState();

    const [modal, setModal] = useState(false);

    const onPress = (data) => {
        setItems(data);
        setModal(true);
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

    let div = (
        <DropDown name={!univ ? `select a ${inst}` : univ } width={'75%'} data={Universities} onPress={onPress} />
    )
    if(inst === U2){
        div = <DropDown name={!univ ? `select a ${inst}` : univ } width={'75%'} data={Universities} onPress={onPress} />
    }else if(inst === U3){
        div = <DropDown name={!univ ? `select a ${inst}` : univ } width={'75%'} data={Universities} onPress={onPress} />
    }

    const drop1 = (name) => {
        if(name === U1 || name === U2 || name === U3){
            setTimeout(() => {
                setItems();
                setModal(false);
                setInst(name)
            }, 100)
        }else{
            setTimeout(() => {
                setItems();
                setModal(false)
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
        if(fullUniv && lev){
            AsyncStorage.setItem('@searchInst', fullUniv);
            AsyncStorage.setItem('@searchLev', lev);
            setEdit(false)
        }else{
            alert('Input fields cannot be left empty')
        }
    }

    const cancle = async() => {
        setEdit(false);
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

    const container = (
        <TouchableWithoutFeedback onPress={() => setEdit(true)}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={{fontSize: 15, color: '#000'}}>Filter Search</Text>
                    <IonicIcon name='filter' size={16} color='#000' style={{marginLeft: 14}} />
                </View>
                <View style={styles.div}>
                    <Text style={{color: '#000', fontSize: 15, opacity: 0.8}}>Universities: {data[0]}</Text>
                </View>
                <View style={styles.div}>
                    <Text style={{color: '#000', fontSize: 15, opacity: 0.8}}>levels: {data[1]}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
    const editableDiv = (
        <>
            <View style={styles.editableDiv}>
                <DropDown name='University' width={'60%'} data={institutions} onPress={onPress} />
                {div}
                <TextInput placeholder='Level' keyboardType='numeric' style={[styles.input, {width: 100}]} placeholderTextColor={'#000'} onChangeText={(text) => setLev(text)} />
            </View>
            <Modal visible={modal} style={{backgroundColor: '#000'}}>
                <DropDownModal data={items} onPress={drop1} />
            </Modal>
            {button2}
        </>
    )
    return (
        <>
            {!edit ? container : editableDiv }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 30
    },
    headerContainer: {
        height: 30,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 4
    },
    div: {
        marginVertical: 3,
        width: '100%',
        justifyContent: 'center',
        marginLeft: 15
    },
    editableDiv: {
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
        fontSize: 17,
        marginBottom: 15,
        letterSpacing: 1.5
    },
    otherBtns: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10
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

export default EditSearch;