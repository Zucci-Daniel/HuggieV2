
import React from 'react';
import MasonryList from "react-native-masonry-list";

//...
import MiniProfileDisplay from '../COMPONENTS/MiniProfileDisplay';

export default function GalleryScreen() {
    const galleryImages = [
        {
            source: require("../ASSETS/boy2.jpg"),
            width: 1080,
            height: 1920
        },
        {
            source: require("../ASSETS/boy1.jpg"),
            width: 1080,
            height: 1920
        },
        {
            source: require("../ASSETS/jackson.jpg"),
            width: 1080,
            height: 1920
        },
    ]

    return (
        <MasonryList
            columns={3}
            images={galleryImages}

        />

    );
}