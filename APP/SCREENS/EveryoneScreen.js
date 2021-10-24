import React, {useEffect, useState} from 'react';
import MasonryList from 'react-native-masonry-list';
import ImageLayout from 'react-native-image-layout';
//...
import MiniProfileDisplay from '../COMPONENTS/MiniProfileDisplay';
import {Image} from 'react-native';

export default function EveryOneScreen() {
  const profileImages = [
    {
      uri: 'https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg',
    },
    {
      uri: 'https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg',
    },
    {
      uri: 'https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg',
    },
    {
      uri: 'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg',
    },
    {
      uri: 'https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg',
    },
  ];
  const [everyone, setEveryone] = useState({});

  const CustomImage = ({username, department, imageUri}) => (
    <View style={{backgroundColor: 'red', height: 100, width: 200}}>
      <Text>
        {username} | {department}
      </Text>
      <Image
        source={{uri: {imageUri}}}
        style={{width: '100%', height: '100%'}}
      />
    </View>
  );

  return (
    // <MasonryList
    //   columns={2}
    //   images={profileImages?profileImages:null}

    // />

    <ImageLayout
      useNativeDriver={true}
      sorted={true}
      images={[
        {
          name: 'serah ada',
          dept: 'computer scie',
          uri: 'https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg',
        },
        {
          // Version *2.0.0 update (or greater versions):
          // Does not require an id for each image
          // object, but is for good practice and
          // can be better for performance for API.
          name: 'serah ada',
          dept: 'computer scie',
          uri: 'https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg',
        },
        {
          name: 'serah ada',
          dept: 'computer scie',
          uri: 'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg',
        },
        {
          name: 'serah ada',
          dept: 'computer scie',
          uri: 'https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg',
        },
        {
          name: 'serah ada',
          dept: 'computer scie',
          uri: 'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg',
        },
        {
          name: 'serah ada',
          dept: 'computer scie',
          uri: 'https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg',
        },
      ]}
      renderIndividualMasonryHeader={(data, index) => {
        return (
          <CustomImage
            key={index}
            username={data.username}
            department={data.dept}
            imageUri={data.uri}
          />
        );
      }}
    />
  );
}
