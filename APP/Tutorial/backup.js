import React, {useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
  FlatList,
  ImageEditor,
  Image,
} from 'react-native';
import AppHotImage from '../COMPONENTS/AppHotImage';
import DateButton from '../COMPONENTS/DateButton';
import ProfileDisplay from '../COMPONENTS/ProfileDisplay';
import Screen from '../COMPONENTS/Screen';
import HotDetails from './HotDetails';
import HotGallery from './HotGallery';
import {scale, ScaledSheet} from 'react-native-size-matters';

export default function CompleteHotScreen({
  image,
  username,
  dept,
  level,
  children,
  onPressDateButton
}) {
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
  ];

  const middle = useRef();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        disableIntervalMomentum={true}
        decelerationRate={'fast'}
        snapToInterval={CARD_HEIGHT + 1}
        snapToAlignment="center"
        contentOffset={{x: 0, y: CARD_HEIGHT}} //shows the area of the scrollView u wanna see first.
        style={styles.scrollArea}>
        <HotGallery>
          {galleryImages.map((imageSrc, index) => (
            <AppHotImage
              key={index * Math.random() * Math.random()}
              source={require('../ASSETS/11.jpg')}
            />
          ))}
        </HotGallery>
        <Screen innerRef={middle} extraStyles={styles.screenStyle}>
          <ProfileDisplay
            extraStyles={styles.ProfileDisplayExtra}
            image={image}
            username={username}
            dept={dept}
            level={level}>
            {children}
          </ProfileDisplay>
        </Screen>
        <HotDetails>
          <DateButton extraStyle={styles.dateIcon} onPress={onPressDateButton} />
        </HotDetails>
      </ScrollView>
    </SafeAreaView>
  );
}
const CARD_HEIGHT = Dimensions.get('window').height * 1;

// const CARD_HEIGHT = Dimensions.get('window').height * 1;
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },

  dateIcon: {
    position: 'absolute',
    bottom: Dimensions.get('window').height / 4,
    right: '30@s',
    // height:80,
  },
  scrollArea: {
    position: 'relative',
  },
  ViewIcon: {
    height: 300,
    backgroundColor: 'red',
    position: 'absolute',
    top: CARD_HEIGHT / 4,
    bottom: 0,
    right: scale(70),
    left: scale(70),
    zIndex: 7,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'none',
  },
  screenStyle: {
      paddingTop:scale(5),
    height: Dimensions.get('window').height-scale(100),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  ProfileDisplayExtra:{
      height:'90%'
  }
});
