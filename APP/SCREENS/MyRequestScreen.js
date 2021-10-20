import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList ,Modal,Button,BackHandler} from 'react-native'
import BubbleImage from '../COMPONENTS/utilities/BubbleImage';
import ProfilePane from '../COMPONENTS/ProfilePane';

import Screen from '../COMPONENTS/Screen';
import RequestPane from '../COMPONENTS/RequestPane';
import CompleteHotScreen from './CompleteHotScreen';



const requestUpdate = [
    {
        id: '1',
        userName: 'Angel Jopet',
        userImg: require('../ASSETS/8.jpg'),
        light: 'red',
        messageText: null,
        date: 'Mon',
        department: 'Industrial Chem',
        level: 200,
        likes:['fighting','talking','yoga'] 
    },
    {
        id: '2',
        userName: 'Purity Uchegbu',
        userImg: require('../ASSETS/11.jpg'),
        light: '#D7880D',
        messageText: '...',
        date: 'Wed',
        department: 'Finance',
        level: 200,
        likes:['eating','smoking','riding','laughing'] 
    },
    {
        id: '3',
        userName: 'Princess Ebere',
        userImg: require('../ASSETS/9.jpg'),
        light: 'red',
        messageText: null,
        date: 'Tue',
        department: 'Computer Science',
        level: 200,
        likes:['making friends','singing','act','shouting'] 
    },
    {
        id: '4',
        userName: 'Sasha Huncho',
        userImg: require('../ASSETS/14.jpg'),
        light: 'red',
        messageText: null,
        date: 'fri',
        department: 'Computer Sci',
        likes:['foodie','migos','attitude','laughing'] ,
        level: 300
    },
    {
        id: '5',
        userName: 'Pretty Nnaji',
        userImg: require('../ASSETS/15.jpg'),
        light: '#328D07',
        messageText: 'hey jackson',
        date: 'Tue',
        department: 'Computer Sci',
        likes:['foodie','korean',] ,
        level: 500
    },
   

];


export default function MyRequestScreen({navigation}) {
 
    const [showChatModal,setShowChatModal]=useState(false);


    BackHandler.addEventListener('hardwareBackPress',function(){
        setShowChatModal(false)
    })

    const navigateToScreen=(item) => navigation.navigate('UserProfile',item)

    return (
        <>
        <Screen extraStyles={styles.extraStyles}>
            <FlatList
                data={requestUpdate}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (<RequestPane
                    profileName={item.userName}
                    profilePicture={item.userImg}
                    department={item.department}
                    level={item.level}
                    date={item.date}
                    onPress={()=>setShowChatModal(true)}
                />)}
            />
        </Screen>
         <Modal visible={showChatModal} animationType='slide'>
         <Button title="Close" onPress={()=>setShowChatModal(false)} /> 
         <CompleteHotScreen />
     </Modal>
     </>
 
    )
}

const styles = StyleSheet.create({
    extraStyles: {
        paddingTop: '0%'
    }
})
