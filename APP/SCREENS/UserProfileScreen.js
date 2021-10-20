import React, { useRef } from 'react'
import {
    SafeAreaView, ScrollView, StyleSheet, Text, View, Dimensions,
    Platform,
    FlatList,
    ImageEditor,
    Image
} from 'react-native'
import AppHotImage from '../COMPONENTS/AppHotImage'
import DateButton from '../COMPONENTS/DateButton'
import ProfileDisplay from '../COMPONENTS/ProfileDisplay'
import Screen from '../COMPONENTS/Screen'
import HotDetails from './HotDetails'
import HotGallery from './HotGallery'
import { scale, ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/core'
import SelectBox from '../COMPONENTS/utilities/SelectBox'
import GreenLight from '../COMPONENTS/utilities/GreenLight'
import RedLight from '../COMPONENTS/utilities/RedLight'



const galleryImages = [
    {
        source: require('../ASSETS/black.jpg'),
    },
    {
        source: require('../ASSETS/black.jpg'),
    },
    {
        source: require('../ASSETS/black.jpg'),
    },
    {
        source: require('../ASSETS/black.jpg'),
    },
    {
        source: require('../ASSETS/black.jpg'),
    },
    {
        source: require('../ASSETS/blueGirl.jpg'),
    },
]

export default function UserProfileScreen({ route, navigation, image, username, dept, level, children }) {

    const { id, userName, userImg, light, date, department, level: theLevel, likes } = route.params;

    const middle = useRef();


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                decelerationRate={'fast'}
                snapToInterval={CARD_HEIGHT + 1}
                snapToAlignment="center"
                contentOffset={{ x: 0, y: CARD_HEIGHT }}//shows the area of the scrollView u wanna see first. 
            >
                <HotGallery>
                    {galleryImages.map((imageSrc, index) => <AppHotImage
                        key={index * Math.random() * Math.random()}
                        source={require('../ASSETS/11.jpg')}
                    />)
                    }
                </HotGallery>
                <Screen innerRef={middle} extraStyles={styles.ScreenExtra}>
                    <ProfileDisplay image={userImg} username={userName} dept={department} level={theLevel}>

                        {likes.map((like, index) => <SelectBox key={like + index * Math.random} likes={like} />)}
                    </ProfileDisplay>
                </Screen>
                <HotDetails>
                    <View style={styles.buttons}>
                        <RedLight />
                        <GreenLight />
                    </View>
                </HotDetails>
            </ScrollView>
        </SafeAreaView>
    )
}

const CARD_HEIGHT = Dimensions.get('window').height * 1.088;
const styles = ScaledSheet.create({
    container: {
        flex: 1,
    },

    ScreenExtra: {
        height:Dimensions.get('window').height-scale(50),
        justifyContent:'center',
        alignItems:'center',
        marginBottom:scale(100)
    },
    buttons: {
        display: 'flex',
        position: 'absolute',
        bottom: CARD_HEIGHT / 5,
        right: 0,
        left: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: scale(30)
    }
})
