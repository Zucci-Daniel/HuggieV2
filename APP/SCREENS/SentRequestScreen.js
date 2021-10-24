import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Dimensions,
  Modal,
  Button,
  BackHandler,
} from 'react-native';
import BubbleImage from '../COMPONENTS/utilities/BubbleImage';
import ProfilePane from '../COMPONENTS/ProfilePane';

import {useNavigation} from '@react-navigation/native';
import Screen from '../COMPONENTS/Screen';

import ChatScreen from '../SCREENS/ChatScreen';
import ChatHeader from '../COMPONENTS/ChatHeader';
import {ScaledSheet, scale} from 'react-native-size-matters';
import MessageScreen from './MessageScreen';
import NoWay from '../ASSETS/naa.svg';
import Pending from '../ASSETS/pending.svg';
import Congrats from '../ASSETS/congrats.svg';

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
  },
  {
    id: '4',
    userName: 'Sasha Huncho',
    userImg: require('../ASSETS/14.jpg'),
    light: 'red',
    messageText: null,
    date: 'fri',
    department: 'Computer Sci',
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
    level: 500,
  },
  {
    id: '6',
    userName: 'Angel Jopet',
    userImg: require('../ASSETS/8.jpg'),
    light: 'red',
    messageText: null,
    date: 'Mon',
    department: 'Industrial Chem',
    level: 200,
  },
  {
    id: '7',
    userName: 'Rose Naka',
    userImg: require('../ASSETS/bw.jpg'),
    light: '#D7880D',
    messageText: '...',
    date: 'Wed',
    department: 'Finance',
    level: 200,
  },
  {
    id: '8',
    userName: 'Princess Ebere',
    userImg: require('../ASSETS/9.jpg'),
    light: 'red',
    messageText: null,
    date: 'Tue',
    department: 'Computer Science',
    level: 200,
  },
  {
    id: '9',
    userName: 'Sasha Huncho',
    userImg: require('../ASSETS/14.jpg'),
    light: 'red',
    messageText: null,
    date: 'fri',
    department: 'Computer Sci',
    level: 300,
  },
  {
    id: '10',
    userName: 'Pretty Nnaji',
    userImg: require('../ASSETS/15.jpg'),
    light: '#328D07',
    messageText: 'hey jackson',
    date: 'Tue',
    department: 'Computer Sci',
    level: 500,
  },
  {
    id: '11',
    userName: 'Princess Ebere',
    userImg: require('../ASSETS/9.jpg'),
    light: 'red',
    messageText: null,
    date: 'Tue',
    department: 'Computer Science',
    level: 200,
  },
  {
    id: '12',
    userName: 'Sasha Huncho',
    userImg: require('../ASSETS/14.jpg'),
    light: 'red',
    messageText: null,
    date: 'fri',
    department: 'Computer Sci',
    level: 300,
  },
  {
    id: '13',
    userName: 'Pretty Nnaji',
    userImg: require('../ASSETS/15.jpg'),
    light: '#328D07',
    messageText: 'hey jackson',
    date: 'Tue',
    department: 'Computer Sci',
    level: 500,
  },
];

export default function SentRequestScreen({navigation}) {
  const [showChatModal, setShowChatModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState({});
  const [redMessage, setRedMessage] = useState(false);
  const [redLightProfile, setRedLightProfile] = useState({});
  const [pendingLightProfile, setPendingLightProfile] = useState({});
  const [pendingMessage, setPendingMessage] = useState(false);
  // const [greenLightProfile, setGreenLightProfile] = useState({});
  const [greenMessage, setGreenMessage] = useState(false);

  var arrayOfRedResponses = [
    'Red Light',
    "It's a no no",
    'She said no',
    "She didn't agree",
  ];
  var arrayOfPendingResponses = [
    'Nope!! not yet',
    'Still to reply',
    'Wait a bit',
    'It Happens bro',
  ];
  var randomNumber = Math.ceil(Math.random() * 4);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      console.log('working');
      return setShowChatModal(false);
    });
  }, [showChatModal]);

  return (
    <>
      <Screen extraStyles={styles.extraStyles}>
        <FlatList
          data={requestUpdate}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ProfilePane
              profileName={item.userName}
              profilePicture={item.userImg}
              lightColor={item.light}
              messages={item.messageText}
              department={item.department}
              level={item.level}
              date={item.date}
              onPress={() => {
                if (item.light == 'red') {
                  setRedLightProfile(item);
                  setRedMessage(true);
                  setTimeout(() => {
                    setRedMessage(false);
                  }, 1000);
                }
                if (item.light == '#D7880D') {
                  setPendingLightProfile(item);
                  setPendingMessage(true);
                  setTimeout(() => {
                    setPendingMessage(false);
                  }, 1000);
                }
                if (item.light == '#328D07') {
                  setSelectedPerson(item);
                  setGreenMessage(true);

                  setTimeout(() => {
                    setShowChatModal(true);
                  }, 1000);
                }
              }}
            />
          )}
        />
      </Screen>
      <Modal
        presentationStyle="fade"
        visible={greenMessage}
        onRequestClose={() => setGreenMessage(false)}>
        <MessageScreen person={selectedPerson.userImg}>
          <View style={styles.iconWrapper}>
            <Congrats />
          </View>
        </MessageScreen>
      </Modal>
      <Modal
        presentationStyle="fade"
        visible={redMessage}
        onRequestClose={() => setRedMessage(false)}>
        <MessageScreen
          title={arrayOfRedResponses[randomNumber]}
          person={redLightProfile.userImg}>
          <View style={styles.iconWrapper}>
            <NoWay />
          </View>
        </MessageScreen>
      </Modal>
      <Modal
        presentationStyle="fade"
        visible={pendingMessage}
        onRequestClose={() => setPendingMessage(false)}>
        <MessageScreen
          title={arrayOfPendingResponses[randomNumber]}
          person={pendingLightProfile.userImg}>
          <View style={styles.iconWrapper}>
            <Pending />
          </View>
        </MessageScreen>
      </Modal>
      <Modal
        presentationStyle="overFullScreen"
        visible={showChatModal}
        animationType="slide"
        onRequestClose={() => {
          setGreenMessage(false);
          setShowChatModal(false);
        }}>
        <ChatHeader
          screenTitle={selectedPerson.userName}
          screenImage={selectedPerson.userImg}
          onPress={() => {
            setGreenMessage(false);
            setShowChatModal(false);
          }}
        />
        <ChatScreen />
      </Modal>
    </>
  );
}

const styles = ScaledSheet.create({
  extraStyles: {
    paddingTop: '0%',
    // paddingBottom:scale(200)
    height: '95%',
  },
  iconWrapper: {
    flex: 1,
    height: 200,
    width: 200,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
