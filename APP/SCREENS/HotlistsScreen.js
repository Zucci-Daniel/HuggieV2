import React,{useCallback} from 'react'
import {
  SafeAreaView, ScrollView, StyleSheet, Text, View, Dimensions,
  Platform,
  Button
} from 'react-native'
import SelectBox from '../COMPONENTS/utilities/SelectBox';
import CompleteHotScreen from './CompleteHotScreen';
import { scale, ScaledSheet } from 'react-native-size-matters';
import Icons2 from 'react-native-vector-icons/FontAwesome5';
import DateButton from '../COMPONENTS/DateButton';


  const cards = [
    {
      username: 'Purity Uchegbu',
      level: 400,
      department: 'Finance',
      source: require('../ASSETS/11.jpg'),
      likes: ['eating', 'smoking', 'riding', 'laughing']
    },
    {
      username: 'Princess Ebere',
      level: 500,
      department: 'Computer Science',
      source: require('../ASSETS/9.jpg'),
      likes: ['making friends', 'singing', 'act', 'shouting']
    },
    {
      username: 'Angel Jopet',
      level: 200,
      department: 'Industrial Chem',
      source: require('../ASSETS/8.jpg'),
  
      likes: ['fighting', 'talking', 'yoga']
    },
    {
      username: 'Sasha Huncho',
      level: 300,
      department: 'Computer Sci',
      source: require('../ASSETS/14.jpg'),
  
      likes: ['foodie', 'migos', 'attitude', 'laughing']
    },
    {
      username: 'Pretty Nnaji',
      level: 300,
      department: 'Computer Sci',
      source: require('../ASSETS/15.jpg'),
  
      likes: ['foodie', 'korean',]
    },
  ]

export default function HotlistsScreen() {
  const returnScrollView = () => {
    return (
          <ScrollView
            horizontal
            decelerationRate={'fast'}
            snapToInterval={CARD_WIDTH + 0}
            snapToAlignment="center"
            disableIntervalMomentum={true}
          >
            {cards.map((users, index) => <View key={index} style={styles.wrapper}>
              <CompleteHotScreen
                username={users.username}
                image={users.source}
                level={users.level}
                dept={users.department}
              >{users.likes.map((like, index) => <SelectBox key={like + index * Math.random} likes={like} />)}
              </CompleteHotScreen>
            </View>)}
          </ScrollView>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      {returnScrollView()}
    </SafeAreaView>
  );
}

const CARD_WIDTH = Dimensions.get('window').width * 1;
const CARD_HEIGHT = Dimensions.get('window').height * 1;
const styles = StyleSheet.create({
  ScrollView: {
    position: 'relative',
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
  },
  heartWrapper: {
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    left: 0
  },

})
