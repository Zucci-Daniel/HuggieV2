import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, ScrollView, Dimensions, TouchableWithoutFeedback, Alert } from 'react-native';
import axios from 'axios';
import colors from '../../config/colors';
import AppIcon from './AppIcon';
import PersonalityBoxes from './PersonalityBoxes';
import UserShowCaseInitials from './UserShowCaseInitials';
import { scale, ScaledSheet} from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchImageLibrary} from 'react-native-image-picker';
import LogoutBtn from './LogoutBtn';
import SelectBox from './SelectBox';
import LoadingScreen from '../loadingScreen';
import EmptyProfilePic from './EmptyProfilePic';
import DetailsContainer from './DetailsContainer';
import EditUserDetailsScreen from '../EditUserDetailsScreen';

import IonicIcon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width;

export default function GalleryProfilePictureScreen() {
    const [editable, setEditable] = useState(false);
    const [userData, setUserData] = useState({
        level: '100L',
        department: 'Computer Science',
        institution: 'Imo state university',
        description: 'I am a 300L student at Imo state university',
        attribute_1: '',
        attribute_2: '',
        attribute_3: '',
        attribute_4: '',
        attribute_5: '',
        profile_pic: null,
        sex: 'male',
        user: {
            username: 'Username'
        }
    });
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [detailsLoading, setDetailsLoading] = useState(false);

    const [modal, setModal] = useState(false)

    useEffect(() => {
        getId();
    }, []);

    const openImage = async() => {
        launchImageLibrary({mediaType: 'photo'}, (response) => {
            const data =response.assets[0].uri;
            postImage(data);
        })
    }

    const postImage = async(image) => {
        setLoading(true)
        const id = await AsyncStorage.getItem('@id');
        const token = await AsyncStorage.getItem('authToken')
        const formData = new FormData();
        formData.append('level', userData.level);
        formData.append('institution', userData.institution);
        formData.append('department', userData.department);
        formData.append('sex', userData.sex);

        
        formData.append('profile_pic', {uri: image, name: 'image.jpg', type: 'image/jpg'})

        axios.put('https://huggie.herokuapp.com/api/profiles/' + id + '/', formData, {
            headers: {
                'Authorization': 'JWT ' + token,
                redirect: 'follow'
            }
        })
        .then(r => {
            setLoading(false);
            setUserData({...userData, profile_pic: image})
        })
        .catch(e => {
            setLoading(false);
            console.log(e)
        })
    }

    const requestPhotoChange = () => {
        Alert.alert('Change Photo', 'Are you sury you want to change profile photo?', [
            {text: 'yes', onPress:() => openImage()},
            {text: 'no'}
        ])
    }

    const getId = async () => {
        console.log('started')
        const data = await AsyncStorage.getItem('@id');
        axios.get(`https://huggie.herokuapp.com/api/user/${data}/`)
            .then(r => {
                const data = r.data.bio[0];
                setUserData({...data, profile_pic: `https://res.cloudinary.com/dyojwpsfb/${data.profile_pic}`});
                setLoading(false);
            })
            .catch(e => {
                setLoading(false);
                console.log(e)
            })
    }

    const onClick = () => {
        setItems([]);
        setEditable(prev => !prev);
    }

    const submit = async () => {
        setLoading(true)
        const id = await AsyncStorage.getItem('@id');
        const token = await AsyncStorage.getItem('authToken')
        const formData = new FormData();
        formData.append('description', userData.description);
        formData.append('level', userData.level);
        formData.append('institution', userData.institution);
        formData.append('department', userData.department);
        formData.append('sex', userData.sex);
        for (let i = 0; i < items.length; i++) {
            formData.append('attribute_' + (i+1), items[i])
        }
 
        axios.put('https://huggie.herokuapp.com/api/profiles/' + id + '/', formData, {
            headers: {
                'Authorization': 'JWT ' + token,
                redirect: 'follow'
            }
        })
        .then(r => {
            setLoading(false);
            const newState = {
                ...userData,
                attribute_1: items[0],
                attribute_2: items[1],
                attribute_3: items[2],
                attribute_4: items[3],
                attribute_5: items[4],
            }
            setUserData(newState);
            setEditable(false)
        })
        .catch(e => {
            alert(e)
            setLoading(false);
            setEditable(false)
        })
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

    const editDetails = async (text) => {
        setDetailsLoading(true)
        const id = await AsyncStorage.getItem('@id');
        const token = await AsyncStorage.getItem('authToken')
        const formData = new FormData();
        formData.append('level', userData.level);
        formData.append('institution', userData.institution);
        formData.append('department', userData.department);
        formData.append('sex', userData.sex);
        formData.append('description', text);

        console.log(formData)
        axios.put('https://huggie.herokuapp.com/api/profiles/' + id + '/', formData, {
            headers: {
                'Authorization': 'JWT ' + token,
                redirect: 'follow'
            }
        })
        .then(r => {
            setDetailsLoading(false);
            const newState = {...userData, description: text};
            setUserData(newState);
        })
        .catch(e => {
            alert(e);
            setDetailsLoading(false);
        })
    }

    const postUpdatedDetails = async (univ, dept, lev) => {
        setDetailsLoading(true)
        const id = await AsyncStorage.getItem('@id');
        const token = await AsyncStorage.getItem('authToken')
        const formData = new FormData();
        formData.append('level', lev);
        formData.append('institution', univ);
        formData.append('department', dept);
        formData.append('sex', userData.sex);

        console.log(formData)
        axios.put('https://huggie.herokuapp.com/api/profiles/' + id + '/', formData, {
            headers: {
                'Authorization': 'JWT ' + token,
                redirect: 'follow'
            }
        })
        .then(r => {
            setDetailsLoading(false);
            const newState = {...userData, description: text};
            setUserData(newState);
        })
        .catch(e => {
            alert(e);
            setDetailsLoading(false);
        })
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
    )

    const button1 = (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.editBtn}>
                <Text style={styles.text}>Edit</Text>
            </View>
        </TouchableWithoutFeedback>
    )

    const button2 = (
        <View style={styles.otherBtns}>
            <TouchableWithoutFeedback onPress={submit}>
                <View style={styles.editBtn}>
                    <Text style={styles.text}>Submit</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={onClick}>
                <View style={styles.cancleBtn}>
                    <IonicIcon name='close' color='#fff' size={20} />
                </View>
            </TouchableWithoutFeedback>
        </View>
    )

    const modalHandler = () => {
        setModal(prevModal => !prevModal)
    }

    const container = (
        <>
            <View style={styles.picture}>
                {userData.profile_pic ? 
                    <TouchableWithoutFeedback onPress={requestPhotoChange}>
                        <Image source={{ uri: userData.profile_pic}} style={styles.image} resizeMode='cover' />
                    </TouchableWithoutFeedback>
                    :
                    <EmptyProfilePic openImage={openImage} />
                } 
            </View>
            <UserShowCaseInitials username={userData.user.username} dept={userData.institution} level={userData.level} openModal={modalHandler} />
            {!detailsLoading ? <DetailsContainer description={userData.description} editDetails={editDetails} /> : <Text style={{paddingTop: 10, paddingBottom: 10}}>Updating...</Text> }
            <View style={styles.likesContainer}>
                {!editable ? div : newDiv}
                <View style={styles.bottombtnContainer}>
                    {editable ? button2 : button1}
                </View>
            </View>
            <View style={styles.bottomContainer}></View>
        </>
    );
    
    return (
        <>
        <ScrollView >
            <View style={styles.GalleryProfilePicture}>
                {container}
                <LogoutBtn />
            </View>
            {loading ? <LoadingScreen /> : null}
        </ScrollView>
        {modal ? <EditUserDetailsScreen postUpdatedDetails={postUpdatedDetails} closeModal={() => setModal(prevState => !prevState)} /> : null}
        </>
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
    },
    text: {
        color: '#DE5295',
        fontWeight: 'bold',
        letterSpacing: 1
    },
    rowm: {
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
        marginTop: scale(10)
    },
    bottombtnContainer: {
        height: 50,
        width: '100%',
        marginTop: scale(20)
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
    }
});