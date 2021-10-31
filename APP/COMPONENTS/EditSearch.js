import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DropDown from './utilities/DropDown';

import IonicIcon from 'react-native-vector-icons/MaterialIcons';
import uni from '../ASSETS/uni.json';
import DropDownModal from './utilities/DropDownModal';

const U1 = 'University';
const U2 = 'Polythecnic';
const U3 = 'College';

const institutions = [
    'University',
    'Polythecnic',
    'College',
]

function EditSearch({data}) {
    const [Universities, setUniversities] = useState();
    const [items, setItems] = useState();
    const [inst, setInst] = useState('University');
    const [univ, setUniv] = useState();
    const [fullUniv, setFullUniv] = useState();

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

    const container = (
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
    )
    const editableDiv = (
        <View style={styles.editableDiv}>
            <DropDown name='University' width={'60%'} data={institutions} onPress={onPress} />
            {div}
            {items ? <DropDownModal data={items} onPress={drop1} /> : null }
        </View>
    )
    return (
        <>
            {editableDiv}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 10
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
        height: '100%',
        width: '100%',
        backgroundColor: '#f00',
        top: 0,
        position: 'absolute'
    }
})

export default EditSearch;