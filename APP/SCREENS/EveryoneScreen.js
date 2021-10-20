
import React from 'react';
import MasonryList from "react-native-masonry-list";

//...
import MiniProfileDisplay from '../COMPONENTS/MiniProfileDisplay';

export default function EveryOneScreen() {
  const profileImages = [
    {
      uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg",
    },
    {
      uri: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg"
    },
    {
      uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg",
    },
    {
      uri: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg"
    },
    {
      uri: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg",
    },
  ]

  return (
    <MasonryList
      columns={2}
      images={profileImages}
     
    />

  );
}