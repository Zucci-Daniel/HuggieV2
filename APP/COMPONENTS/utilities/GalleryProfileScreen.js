import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, ScrollView, Dimensions, TouchableWithoutFeedback } from 'react-native';
import axios from 'axios';
import colors from '../../config/colors';
import AppIcon from './AppIcon';
import PersonalityBoxes from './PersonalityBoxes';
import UserShowCaseInitials from './UserShowCaseInitials';
import { scale, ScaledSheet} from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LogoutBtn from './LogoutBtn';
import SelectBox from './SelectBox';
import LoadingScreen from '../loadingScreen';
import EmptyProfilePic from './EmptyProfilePic';

const width = Dimensions.get('screen').width;

export default function GalleryProfilePictureScreen({ setConfigLoading }) {
    const [editable, setEditable] = useState(false);
    const [userData, setUserData] = useState({
        level: '100L',
        department: 'Computer Science',
        institution: 'Imo state university',
        attribute_1: '',
        attribute_2: '',
        attribute_3: '',
        attribute_4: '',
        attribute_5: '',
        profile_pic: null,
        user: {
            username: 'Username'
        }
    });
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getId()
    }, [])

    const getId = async () => {
        console.log('started')
        const data = await AsyncStorage.getItem('@id');
        axios.get(`https://huggie.herokuapp.com/api/user/${data}/`)
            .then(r => {
                const data = r.data.bio[0];
                setUserData(data);
                setLoading(false);
                console.log(userData)
            })
            .catch(e => {
                setLoading(false);
                console.log(e)
            })
    }

    const onClick = () => {
        setEditable(prev => !prev);
    }

    const submit = async() => {
        let formdata = new FormData();
        formdata.append('level', userData.level);
        formdata.append("department", userData.department);
        formdata.append('institution', userData.institution);
        FormData.append('sex', userData.sex);
        formdata.append('description', userData.description);
        // for (let i = 0; i < items.length; i++) {
        //     // formdata.append('attribute_' + (i+1), items[i])
        // }
        console.log(formdata)

        // axios.put('https://huggie.herokuapp.com/api/profiles/' + id + '/', formdata )
        //     .then(r => console.log(r.data))
        //     .catch(e => console.log(e))
    }

    const itemAdder = (name) => {
        setItems(prevArr => [...prevArr, name]);
    }

    const itemRemover = (name) => {
        const idx = items.indexOf(name);
        let item = items;
        item.splice(idx, 1);
        setItems(item);
    }

    const div = (
        <View style={styles.rowm}>
            <SelectBox likes={userData.attribute_1} />
            <SelectBox likes={userData.attribute_2} />
            <SelectBox likes={userData.attribute_3} />
            <SelectBox likes={userData.attribute_4} />
            <SelectBox likes={userData.attribute_5} />
        </View>
    )

    const newDiv = (
        <View>
            <View style={styles.row1}>
                <PersonalityBoxes name='Books' width='33.3%' itemAdder={itemAdder} itemRemover={itemRemover} fs />
                <PersonalityBoxes name='Fun' width='33.3%' itemAdder={itemAdder} itemRemover={itemRemover}  />
                <PersonalityBoxes name='Food' width='33.3%' itemAdder={itemAdder} itemRemover={itemRemover} fe />
            </View>
            <View style={styles.row1}>
                <PersonalityBoxes name='Fashion' width='40%' itemAdder={itemAdder} itemRemover={itemRemover} fs />
                <PersonalityBoxes name='Music' width='30%' itemAdder={itemAdder} itemRemover={itemRemover} />
                <PersonalityBoxes name='Movies' width='30%' itemAdder={itemAdder} itemRemover={itemRemover} fe />
            </View>
            <View style={styles.row1}>
                <PersonalityBoxes name='Tech' width='35%' itemAdder={itemAdder} itemRemover={itemRemover} fs />
                <PersonalityBoxes name='Comedy' width='65%' itemAdder={itemAdder} itemRemover={itemRemover} fe />
            </View>
            <View style={styles.row1}>
                <PersonalityBoxes name='Sports' width='30%' itemAdder={itemAdder} itemRemover={itemRemover} fs />
                <PersonalityBoxes name='Nature' width='30%' itemAdder={itemAdder} itemRemover={itemRemover} />
                <PersonalityBoxes name='Politics' width='40%' itemAdder={itemAdder} itemRemover={itemRemover} fe />
            </View>
        </View>
    );

    const container = (
        <>
            <View style={styles.picture}>
                {userData.profile_pic ? 
                    <Image source={require('../../ASSETS/jackson.jpg')} style={styles.image} resizeMode="cover" />
                    :
                    <EmptyProfilePic />
                }
            </View>
            <UserShowCaseInitials username={userData.user.username} dept={userData.institution} level={userData.level} />
            <View style={styles.likesContainer}>
                {!editable ? div : newDiv}
                <TouchableWithoutFeedback onPress={!editable ? onClick : submit}>
                    <View style={styles.editBtn}>
                        <Text style={styles.text}>{!editable ? 'Edit' : 'Submit'}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </>
    )
    
    return (
        <ScrollView >
            <View style={styles.GalleryProfilePicture}>
                {!userData ? <LoadingScreen /> : container }
                <LogoutBtn />
            </View>
        </ScrollView>
    )
};

const styles = ScaledSheet.create({
    GalleryProfilePicture: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: scale(10)
    },
    picture: {
        width: '95%',
        height: Dimensions.get('window').height / 2,
        backgroundColor: colors.white,
        borderRadius: scale(20),
        overflow: 'hidden',
        position: 'relative'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    cameraIcon: {
        position: 'absolute',
        bottom: 0,
        color: colors.brandColor,
        left: scale(20),
        bottom: scale(20),
    },
    likesContainer: {
        width: width - 40,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    row1: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: scale(10)
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
        marginTop: scale(30)
    },
    text: {
        color: '#DE5295',
        fontWeight: 'bold'
    },
    rowm: {
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
        marginTop: scale(10)
    }
});