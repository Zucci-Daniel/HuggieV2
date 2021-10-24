import React, {useEffect, useState} from 'react';
import MasonryList from 'react-native-masonry-list';
import ImageLayout from 'react-native-image-layout';
//...
import MiniProfileDisplay from '../COMPONENTS/MiniProfileDisplay';
import {FlatList, Image,StyleSheet} from 'react-native';
import Screen from '../COMPONENTS/Screen';
import { scale } from 'react-native-size-matters';



const cards = [
  {

    id:1,
    username: 'Rose Naka',
    level: 400,
    department: 'Finance',
    source: require('../ASSETS/bw.jpg'),
    likes: ['eating', 'smoking', 'riding', 'laughing'],
    gallery: [
      {
        source: require('../ASSETS/bw.jpg'),
      },
      {
        source: require('../ASSETS/bw.jpg'),
      },
      {
        source: require('../ASSETS/bw.jpg'),
      },
      {
        source: require('../ASSETS/bw.jpg'),
      },
      {
        source: require('../ASSETS/bw.jpg'),
      },
      {
        source: require('../ASSETS/bw.jpg'),
      },
    ],
    verified: true,
  },
  {
    id:2,
    username: 'Princess Ebere',
    level: 500,
    department: 'Computer Science',
    source: require('../ASSETS/9.jpg'),
    likes: ['making friends', 'singing', 'act', 'shouting'],
    gallery: [
      {
        source: require('../ASSETS/9.jpg'),
      },
      {
        source: require('../ASSETS/9.jpg'),
      },
      {
        source: require('../ASSETS/9.jpg'),
      },
      {
        source: require('../ASSETS/9.jpg'),
      },
      {
        source: require('../ASSETS/9.jpg'),
      },
      {
        source: require('../ASSETS/9.jpg'),
      },
    ],
    verified: false,
  },

  {
    id:3,
    username: 'Angel Jopet',
    level: 200,
    department: 'Industrial Chem',
    source: require('../ASSETS/8.jpg'),

    likes: ['fighting', 'talking', 'yoga'],
    gallery: [
      {
        source: require('../ASSETS/8.jpg'),
      },
      {
        source: require('../ASSETS/8.jpg'),
      },
      {
        source: require('../ASSETS/8.jpg'),
      },
      {
        source: require('../ASSETS/8.jpg'),
      },
      {
        source: require('../ASSETS/8.jpg'),
      },
      {
        source: require('../ASSETS/8.jpg'),
      },
    ],
    verified: true,
  },

  {
    id:4,
    username: 'Sasha Huncho',
    level: 300,
    department: 'Computer Sci',
    source: require('../ASSETS/14.jpg'),

    likes: ['foodie', 'migos', 'attitude', 'laughing'],
    gallery: [
      {
        source: require('../ASSETS/14.jpg'),
      },
      {
        source: require('../ASSETS/14.jpg'),
      },
      {
        source: require('../ASSETS/14.jpg'),
      },
      {
        source: require('../ASSETS/14.jpg'),
      },
      {
        source: require('../ASSETS/14.jpg'),
      },
      {
        source: require('../ASSETS/14.jpg'),
      },
    ],
    verified: true,
  },

  {
    id:5,
    username: 'Pretty Nnaji',
    level: 300,
    department: 'Computer Sci',
    source: require('../ASSETS/15.jpg'),

    likes: ['foodie', 'korean'],
    gallery: [
      {
        source: require('../ASSETS/15.jpg'),
      },
      {
        source: require('../ASSETS/15.jpg'),
      },
      {
        source: require('../ASSETS/15.jpg'),
      },
      {
        source: require('../ASSETS/15.jpg'),
      },
      {
        source: require('../ASSETS/15.jpg'),
      },
      {
        source: require('../ASSETS/15.jpg'),
      },
    ],
    verified: false,
  },
];



export default function EveryOneScreen() {
  

  return (
    <>
    <Screen extraStyles={styles.ScreenExtraStyles}>
     <FlatList
     
     data={cards}
     keyExtractor={(item)=>item.id}
     numColumns={2}
     renderItem={({item,index})=><MiniProfileDisplay 
     username={item.username}
     department={item.department}
     level={item.level}
     image={item.source}
     />}
     />
    </Screen>
    </>
  );
}


const styles=StyleSheet.create({
ScreenExtraStyles:{
  paddingBottom:'40%',
  justifyContent:'center',
  alignItems:'center'
}
})