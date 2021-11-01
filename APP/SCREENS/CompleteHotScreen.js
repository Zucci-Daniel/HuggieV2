import React, {useRef, useState} from 'react';
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
  Modal,
} from 'react-native';
import AppHotImage from '../COMPONENTS/AppHotImage';
import DateButton from '../COMPONENTS/DateButton';
import ProfileDisplay from '../COMPONENTS/ProfileDisplay';
import Screen from '../COMPONENTS/Screen';
import HotDetails from './HotDetails';
import HotGallery from './HotGallery';
import {scale, ScaledSheet} from 'react-native-size-matters';
import ImageLayout from 'react-native-image-layout';

////

export default function CompleteHotScreen({
  image,
  username,
  dept,
  level,
  bio,
  institution,
  children,
  onPressDateButton,
  useThisGallery,
  verified
}) {
 
  const [showModal, setShowModal] = useState(false);
  const [selectedPic, setSelectedPic] = useState({});
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
          {useThisGallery.map((image, index) => (
            <AppHotImage
              key={index * Math.random() * Math.random()}
              image={image}
              onPress={() => {
                setSelectedPic(image);
                setShowModal(true);
                console.log(image.source, 'this is it now');
              }}
            />
          ))}
          <Modal visible={showModal} onRequestClose={() => setShowModal(false)}>
            <View style={styles.modalViewStyle}>
              <View style={styles.modalImageWrapper}>
                <Image source={{uri: `https://res.cloudinary.com/dyojwpsfb/${selectedPic}`}} style={styles.modalImage} />
              </View>
            </View>
          </Modal>
        </HotGallery>
        <Screen innerRef={middle} extraStyles={styles.screenStyle}>
          <ProfileDisplay
            verified={verified}
            extraStyles={styles.ProfileDisplayExtra}
            image={image}
            username={username}
            dept={dept}
            level={level}>
            {children}
          </ProfileDisplay>
        </Screen>
        <HotDetails data={[institution, bio]}>
          <DateButton
            extraStyle={styles.dateIcon}
            onPress={onPressDateButton}
          />
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
    paddingTop: scale(5),
    height: Dimensions.get('window').height - scale(70),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  ProfileDisplayExtra: {
    height: '90%',
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
