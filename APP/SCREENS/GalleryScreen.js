import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ImageComponent from '../COMPONENTS/utilities/GalleryScreenImageComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {launchImageLibrary} from 'react-native-image-picker';


import LoadingScreen from '../COMPONENTS/loadingScreen';
import ImageViewerScreen from '../COMPONENTS/ImageViewerScreen';

export default function GalleryScreen() {
    const [userData, setUserData] = useState();
    const [loading, setLoading] = useState(false);
    const [refresh, setRefresh] = useState(0);
    const [selectedImage, setSelectedImage] = useState();

    useEffect(() => {
        fetchData();
    },[refresh])

    const fetchData = async () => {
        setLoading(true);
        const data = await AsyncStorage.getItem('@id');
        axios.get(`https://huggie.herokuapp.com/api/user/${data}/`)
            .then(r => {
                const data = r.data.bio[0];
                setLoading(false)
                setUserData(data)
            })
            .catch(e => {
                setLoading(false)
                console.log(e)
            })
    }

    const selectImage = async (data, num) => {
        const id = await AsyncStorage.getItem('@id');
        const token = await AsyncStorage.getItem('authToken')
        const formData = new FormData();
        formData.append('level', userData.level);
        formData.append('institution', userData.institution);
        formData.append('department', userData.department);
        formData.append('sex', userData.sex);

        formData.append('picture_' + num, {uri: data, name: 'image.jpg', type: 'image/jpg'});

        axios.put('https://huggie.herokuapp.com/api/profiles/' + id + '/', formData, {
            headers: {
                'Authorization': 'JWT ' + token,
                redirect: 'follow'
            }
        })
        .then(r => {
            const profile = 'picture_' + num;
            setRefresh(prevRefresh => prevRefresh + 1)
        })
        .catch(e => {
            console.log(e)
        })
    }

    const deleteImage = async (data, num) => {
        const id = await AsyncStorage.getItem('@id');
        const token = await AsyncStorage.getItem('authToken')
        const formData = new FormData();
        formData.append('level', userData.level);
        formData.append('institution', userData.institution);
        formData.append('department', userData.department);
        formData.append('sex', userData.sex);

        formData.append('picture_' + num, '');

        axios.put('https://huggie.herokuapp.com/api/profiles/' + id + '/', formData, {
            headers: {
                'Authorization': 'JWT ' + token,
                redirect: 'follow'
            }
        })
        .then(r => {
            const profile = 'picture_' + num;
            setRefresh(prevRefresh => prevRefresh + 1)
        })
        .catch(e => {
            console.log(e)
        })
    }

    const openImage = (img, num) => {
        const data = {img, num};
        setSelectedImage(data)
    }

    const closeDiv = () => {
        setSelectedImage()
    }

    const upload = (num) => {
        launchImageLibrary({mediaType: 'photo'}, (response) => {
            const data =response.assets[0].uri;
            if(data){
                setSelectedImage();
                selectImage(data, num)
            }
        })
    }

    const deletePhoto = (num) => {
        setSelectedImage();
        deleteImage(null, num)
    }

    let div = <Text>Error</Text>
    if(userData){
        div = (
            <ScrollView>
                <View style={styles.flexWapper}>
                    <ImageComponent pic={userData.picture_1} onClick={(data) => selectImage(data, 1)} openImage={() => openImage(userData.picture_1, 1)} />
                    <ImageComponent pic={userData.picture_2} onClick={(data) => selectImage(data, 2)} openImage={() => openImage(userData.picture_2, 2)} />
                    <ImageComponent pic={userData.picture_3} onClick={(data) => selectImage(data, 3)} openImage={() => openImage(userData.picture_3, 3)} />
                    <ImageComponent pic={userData.picture_4} onClick={(data) => selectImage(data, 4)} openImage={() => openImage(userData.picture_4, 4)} />
                    <ImageComponent pic={userData.picture_5} onClick={(data) => selectImage(data, 5)} openImage={() => openImage(userData.picture_5, 5)} />
                    <ImageComponent pic={userData.picture_6} onClick={(data) => selectImage(data, 6)} openImage={() => openImage(userData.picture_6, 6)} />
                </View>
            </ScrollView>
        )
    }
    
    return (
        <View style={styles.container}>
            {!loading ? div : <LoadingScreen />}
            {selectedImage ? <ImageViewerScreen data={selectedImage} close={closeDiv} upload={(num) => upload(num)} deletePhoto={deletePhoto} /> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    flexWapper: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})