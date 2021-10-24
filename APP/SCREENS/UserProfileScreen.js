import React, {useRef, useCallback,useState} from 'react';
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
  Modal
} from 'react-native';
import AppHotImage from '../COMPONENTS/AppHotImage';
import DateButton from '../COMPONENTS/DateButton';
import ProfileDisplay from '../COMPONENTS/ProfileDisplay';
import Screen from '../COMPONENTS/Screen';
import HotDetails from './HotDetails';
import HotGallery from './HotGallery';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/core';
import SelectBox from '../COMPONENTS/utilities/SelectBox';
import GreenLight from '../COMPONENTS/utilities/GreenLight';
import RedLight from '../COMPONENTS/utilities/RedLight';
import colors from '../config/colors';
//animation
//gestures
import {
  TapGestureHandler,
  RotationGestureHandler,
  gestureHandlerRootHOC,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

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

const UserProfileScreen = gestureHandlerRootHOC(function TheMain({
  image,
  username,
  dept,
  level,
  children,
}) {
  const middle = useRef();
  const [showModal, setShowModal] = useState(false);
  const [selectedPic, setSelectedPic] = useState({});

  const AnimatedView = Animated.createAnimatedComponent(View);

  const scale = useSharedValue(0);

  const rStyle = useAnimatedStyle(() => ({
    transform: [{scale: Math.max(scale.value, 0)}],
    display: 'flex',
  }));

  const showSentAnimation = useCallback(() => {
    console.log('working my request');
    return (scale.value = withSpring(1, undefined, isFinished => {
      if (isFinished) {
        scale.value = withSpring(0);
      }
    }));
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        decelerationRate={'fast'}
        snapToInterval={CARD_HEIGHT + 1}
        snapToAlignment="center"
        contentOffset={{x: 0, y: CARD_HEIGHT}} //shows the area of the scrollView u wanna see first.
        style={styles.scrollArea}>
        <HotGallery>
          {galleryImages.map((imageSrc, index) => (
            <AppHotImage
              key={index * Math.random() * Math.random()}
              image={imageSrc.source}
              onPress={() => {
                setSelectedPic(imageSrc.source);
                setShowModal(true);
                console.log(imageSrc.source, 'this is it now');
              }}
            />
          ))}
              <Modal visible={showModal} onRequestClose={() => setShowModal(false)}>
            <View style={styles.modalViewStyle}>
              <View style={styles.modalImageWrapper}>
                <Image source={selectedPic} style={styles.modalImage} />
              </View>
            </View>
          </Modal>
        </HotGallery>
        <Screen innerRef={middle} extraStyles={styles.screenStyle}>
          <ProfileDisplay
            image={image}
            username={username}
            dept={dept}
            level={level}
            extraStyles={styles.extraDisplay}>
            {children}
          </ProfileDisplay>
        </Screen>
        <HotDetails>
          {/* <View style={styles.buttons}>
                <RedLight />
                <GreenLight />
              </View> */}
        </HotDetails>
      </ScrollView>
        <View style={styles.buttons}>
          <RedLight />
          <GreenLight onPress={showSentAnimation} />
        </View>
    </SafeAreaView>
  );
});

const CARD_HEIGHT = Dimensions.get('window').height * 1.088;
const CARD_HEIGHT2 = Dimensions.get('window').height * 1;
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: colors.white,
  },
  buttons: {
    display: 'flex',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: scale(30),
  },
  extraDisplay: {
    height: '90%',
  },
  screenStyle: {
    paddingTop: scale(5),
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: scale(50),
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
    display: 'flex',
  },
  modalViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  modalImageWrapper: {
    borderRadius: scale(10),
    width: Dimensions.get('window').width - scale(30),
    height: Dimensions.get('window').height - scale(100),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  modalImage: {
    height: '100%',
     width: '100%', 
  },
});

export default UserProfileScreen;
