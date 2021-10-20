import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, StatusBar, Dimensions, TouchableWithoutFeedback } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Icons from 'react-native-vector-icons/Ionicons'
import PersonalityBoxes from '../COMPONENTS/utilities/PersonalityBoxes';
import LoadingScreen from '../COMPONENTS/loadingScreen';

const width = Dimensions.get('screen').width;
const statusbarHeight = StatusBar.currentHeight;

function SignupScreen3({data, clearScreen}) {
    const [loading, setLoading] = useState(false);

    const [items, setItems] = useState([]);
    const [search, setSearch] = useState([]);
    
    useEffect(() => {
        fetchData()
    },[]);

    const fetchData = () => {
        console.log(data, 'mockingBird')
    }

    const itemAdder = (name) => {
        setItems(prevArr => [...prevArr, name])
    }

    const itemRemover = (name) => {
        const idx = items.indexOf(name);
        let item = items;
        item.splice(idx, 1);
        setItems(item);
    }

    const searchAdder = (name) => {
        setSearch(prevArr => [...prevArr, name]);
    }

    const searchRemover = (name) => {
        const idx = search.indexOf(name);
        let item = search;
        item.splice(idx, 1);
        setSearch(item)
    }

    const submit = () => {
        const num = items.length;
        const newNum = num - 5;
        if(newNum < 0){
            alert('Please add ' + Math.abs(newNum) + ' more intrest box')
        }else if(items.length > 5){
            alert('Please remove ' + Math.abs(newNum) + ' interest box')
        }else{
            submit2()
        }
    }

    const submit2 = async () => {
        setLoading(true)
        const id = await AsyncStorage.getItem('@id');
        const token = await AsyncStorage.getItem('authToken')
        const sex = await data.sex;
        const NewSex = sex.toLowerCase();
        const formdata = new FormData();
        for (let i = 0; i < items.length; i++) {
            formdata.append('attribute_' + (i+1), items[i])
        }
        formdata.append('level', data.level+'L');
        formdata.append('sex', NewSex );
        formdata.append('description', data.description);
        formdata.append('department', data.department);
        formdata.append('institution', data.institution);
        console.log(formdata);

        axios.put('https://huggie.herokuapp.com/api/profiles/' + id + '/', formdata, {
            headers: {
                'Authorization': 'JWT ' + token,
                redirect: 'follow'
            }
        })
        .then(r => {
            setLoading(false);
            console.log(r.data);
            clearScreen()
        })
        .catch(e => {
            setLoading(false);
            console.log(e.response.data);
        });
    }

    return (
        <>
        <View>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={styles.topContainer}>
                <Icons name='arrow-back' size={20} color='#fff' style={{marginTop: 10, marginLeft: 10}} />
                <Text style={styles.intro}>Welcome to Huggie</Text>
                <Text style={styles.intro2}>Students Dating Platform</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={{marginTop: '4%'}}>
                <Text style={styles.bottomTextHeader}>Your Kind Of Person...</Text>
                <View style={styles.mainContainer}>
                    <View style={styles.row1}>
                        <PersonalityBoxes name='Books' width='33.3%' item={items} itemAdder={itemAdder} itemRemover={itemRemover} fs />
                        <PersonalityBoxes name='Fun' width='33.3%' item={items} itemAdder={itemAdder} itemRemover={itemRemover}  />
                        <PersonalityBoxes name='Food' width='33.3%' item={items} itemAdder={itemAdder} itemRemover={itemRemover} fe />
                    </View>
                    <View style={styles.row1}>
                        <PersonalityBoxes name='Fashion' width='40%' item={items} itemAdder={itemAdder} itemRemover={itemRemover} fs />
                        <PersonalityBoxes name='Music' width='30%' item={items} itemAdder={itemAdder} itemRemover={itemRemover} />
                        <PersonalityBoxes name='Movies' width='30%' item={items} itemAdder={itemAdder} itemRemover={itemRemover} fe />
                    </View>
                    <View style={styles.row1}>
                        <PersonalityBoxes name='Tech' width='35%' item={items} itemAdder={itemAdder} itemRemover={itemRemover} fs />
                        <PersonalityBoxes name='Comedy' width='65%' item={items} itemAdder={itemAdder} itemRemover={itemRemover} fe />
                    </View>
                    <View style={styles.row1}>
                        <PersonalityBoxes name='Sports' width='30%' item={items} itemAdder={itemAdder} itemRemover={itemRemover} fs />
                        <PersonalityBoxes name='Nature' width='30%' item={items} itemAdder={itemAdder} itemRemover={itemRemover} />
                        <PersonalityBoxes name='Politics' width='40%' item={items} itemAdder={itemAdder} itemRemover={itemRemover} fe />
                    </View>
                </View>
                <View style={styles.SearchSelector}>
                    <Text style={styles.searchText}>How would you like to conduct your search?</Text>
                    <View style={{alignItems: 'center'}}>
                        <View style={styles.row2}>
                            <PersonalityBoxes name='Department' width='50%' itemAdder={searchAdder} itemRemover={searchRemover} />
                            <PersonalityBoxes name='Level' width='50%' itemAdder={searchAdder} itemRemover={searchRemover} />
                        </View>
                    </View>
                </View>
                </View>
            </View>
        </View>
        <View style={styles.bottomNav}>
            <View style={[styles.box1, {backgroundColor:'#fff'}]} />
            <TouchableWithoutFeedback onPress={submit}>
                <View style={[styles.box1, {backgroundColor: '#E51D7D'}]}>
                    <Text style={{fontWeight: '700', color: '#fff'}}>I'm Done</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
        {loading ? <LoadingScreen /> : null}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
    },
    topContainer: {
        width: '100%',
        backgroundColor: '#DE5295',
        paddingTop: statusbarHeight,
        paddingBottom: 25,
        height: '30%'
    },
    intro: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 25,
        fontFamily: 'verdana',
        width: 160,
        marginTop: 10,
        marginLeft: 20
    },
    intro2: {
        color: '#fff',
        paddingTop: 10,
        fontSize: 15,
        letterSpacing: 1,
        marginLeft: 20
    },
    bottomContainer: {
        width: '100%',
        backgroundColor: '#fff',
        height: '70%'
    },
    bottomTextHeader: {
        fontSize: 20,
        paddingLeft: 20,
        paddingTop: 15,
        letterSpacing: 1,
        opacity: 0.8
    },
    mainContainer: {
        width: width - 40,
        marginLeft: 20,
        marginTop: 20,
    },
    row1: {
        height: 40,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 3
    },
    SearchSelector: {
        width: '100%',
    },
    searchText: {
        fontSize: 18,
        marginLeft: 20,
        paddingTop: '5%',
        letterSpacing: 1,
        opacity: 0.8,
        width: '90%'
    },
    row2: {
        height: 40,
        width: '90%',
        flexDirection: 'row',
        marginTop: 13
    },
    checkbox: {
        width: 80,
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 11
    },
    circle: {
        height: 15,
        width: 15,
        borderRadius: 5,
        backgroundColor: '#c4c4c4',
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

export default SignupScreen3;