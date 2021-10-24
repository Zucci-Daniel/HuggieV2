import React, {useState,useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Modal,
  Button,
  BackHandler,
  Dimensions
} from 'react-native';
import BubbleImage from '../COMPONENTS/utilities/BubbleImage';
import ProfilePane from '../COMPONENTS/ProfilePane';

import Screen from '../COMPONENTS/Screen';
import RequestPane from '../COMPONENTS/RequestPane';
import CompleteHotScreen from './CompleteHotScreen';
import SelectBox from '../COMPONENTS/utilities/SelectBox';
import UserProfileScreen from './UserProfileScreen';

import DateButton from '../COMPONENTS/DateButton';
import { ScaledSheet,scale } from 'react-native-size-matters';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

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
    likes: ['fighting', 'talking', 'yoga'],
  },
  {
    id: '2',
    userName: 'Rose Naka',
    userImg: require('../ASSETS/bw.jpg'),
    light: '#D7880D',
    messageText: '...',
    date: 'Wed',
    department: 'Finance',
    level: 200,
    likes: ['eating', 'smoking', 'riding', 'laughing'],
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
    likes: ['making friends', 'singing', 'act', 'shouting'],
  },
  {
    id: '4',
    userName: 'Sasha Huncho',
    userImg: require('../ASSETS/14.jpg'),
    light: 'red',
    messageText: null,
    date: 'fri',
    department: 'Computer Sci',
    likes: ['foodie', 'migos', 'attitude', 'laughing'],
    level: 300,
  },
  {
    id: '5',
    userName: 'Pretty Nnaji',
    userImg: require('../ASSETS/15.jpg'),
    light: '#328D07',
    messageText: 'hey jackson',
    date: 'Tue',
    department: 'Computer Sci',
    likes: ['foodie', 'korean'],
    level: 500,
  },
  {
    id: '6',
    userName: 'Sasha Huncho',
    userImg: require('../ASSETS/14.jpg'),
    light: 'red',
    messageText: null,
    date: 'fri',
    department: 'Computer Sci',
    likes: ['foodie', 'migos', 'attitude', 'laughing'],
    level: 300,
  },
  {
    id: '7',
    userName: 'Pretty Nnaji',
    userImg: require('../ASSETS/15.jpg'),
    light: '#328D07',
    messageText: 'hey jackson',
    date: 'Tue',
    department: 'Computer Sci',
    likes: ['foodie', 'korean'],
    level: 500,
  },
  {
    id: '8',
    userName: 'Sasha Huncho',
    userImg: require('../ASSETS/14.jpg'),
    light: 'red',
    messageText: null,
    date: 'fri',
    department: 'Computer Sci',
    likes: ['foodie', 'migos', 'attitude', 'laughing'],
    level: 300,
  },
  {
    id: '9',
    userName: 'Pretty Nnaji',
    userImg: require('../ASSETS/15.jpg'),
    light: '#328D07',
    messageText: 'hey jackson',
    date: 'Tue',
    department: 'Computer Sci',
    likes: ['foodie', 'korean'],
    level: 500,
  },
  {
    id: '10',
    userName: 'Pretty Nnaji',
    userImg: require('../ASSETS/15.jpg'),
    light: '#328D07',
    messageText: 'hey jackson',
    date: 'Tue',
    department: 'Computer Sci',
    likes: ['foodie', 'korean'],
    level: 500,
  },
  {
    id: '11',
    userName: 'Pretty Nnaji',
    userImg: require('../ASSETS/15.jpg'),
    light: '#328D07',
    messageText: 'hey jackson',
    date: 'Tue',
    department: 'Computer Sci',
    likes: ['foodie', 'korean'],
    level: 500,
  },
  {
    id: '13',
    userName: 'Pretty Nnaji',
    userImg: require('../ASSETS/15.jpg'),
    light: '#328D07',
    messageText: 'hey jackson',
    date: 'Tue',
    department: 'Computer Sci',
    likes: ['foodie', 'korean'],
    level: 500,
  },
  {
    id: '14',
    userName: 'Pretty Nnaji',
    userImg: require('../ASSETS/15.jpg'),
    light: '#328D07',
    messageText: 'hey jackson',
    date: 'Tue',
    department: 'Computer Sci',
    likes: ['foodie', 'korean'],
    level: 500,
  },
  {
    id: '15',
    userName: 'Pretty Nnaji',
    userImg: require('../ASSETS/15.jpg'),
    light: '#328D07',
    messageText: 'hey jackson',
    date: 'Tue',
    department: 'Computer Sci',
    likes: ['foodie', 'korean'],
    level: 500,
  },
];


export default function MyRequestScreen({navigation}) {
  const [selectedProfile, setSelectedProfile] = useState({});
  const [showProfileModal, setShowProfileModal] = useState(false);


  return (
    <>
    
      <Screen extraStyles={styles.extraStyles}>
        <FlatList
          data={requestUpdate}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <RequestPane
              profileName={item.userName}
              profilePicture={item.userImg}
              department={item.department}
              level={item.level}
              date={item.date}
              onPress={() => {
                setShowProfileModal(true);
                setSelectedProfile(item);
              }}
            />
          )}
        />
      </Screen>

      <Modal
        visible={showProfileModal}
        animationType="fade"
        onRequestClose={() => setShowProfileModal(false)}>
        <UserProfileScreen
          image={selectedProfile.userImg}
          username={selectedProfile.userName}
          dept={selectedProfile.department}
          level={selectedProfile.level}>
          {selectedProfile.likes
            ? selectedProfile.likes.map((like, index) => (
                <SelectBox key={index} likes={like} />
              ))
            : null}

        </UserProfileScreen>
      </Modal>

  
    </>
  );
}
const CARD_HEIGHT = Dimensions.get('window').height * 1;

const styles = ScaledSheet.create({
  extraStyles: {
    paddingTop: '0%',
    position:"relative",
    height:'90%'
  },
});
