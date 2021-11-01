import React, {useCallback,useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
import SelectBox from '../COMPONENTS/utilities/SelectBox';
import CompleteHotScreen from './CompleteHotScreen';
import {scale, ScaledSheet} from 'react-native-size-matters';
import Icons2 from 'react-native-vector-icons/FontAwesome5';
import DateButton from '../COMPONENTS/DateButton';
import LoadingScreen from '../COMPONENTS/loadingScreen';
import LottieView from 'lottie-react-native';
import {connect} from 'react-redux';
import * as actions from '../Redux/Actions/index';
//gestures
import {
  TapGestureHandler,
  RotationGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import axios from 'axios';
import Toast from 'react-native-toast-message';
const cards = [
  {
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



function HotlistsScreen(props) {
  

  React.useEffect(() => {
    Toast.show({
      type: 'brandToast',
      text2: 'DOUBLE TAP TO SEND A DATE💌 REQUEST 😉',
      topOffset: Dimensions.get('window').height / 3,
    });
  }, []);

  const AnimatedView = Animated.createAnimatedComponent(View);

  const scale = useSharedValue(0);
  const scale2 = useSharedValue(0);

  const rStyle = useAnimatedStyle(() => ({
    transform: [{scale: Math.max(scale.value, 0)}],
    display: 'flex',
  }));
  const tipStyle = useAnimatedStyle(() => ({
    display: 'flex',
    opacity: Math.max(scale2.value, 15)
  }));

  const showSentAnimation = useCallback(() => {
    scale.value = withSpring(1, undefined, isFinished => {
      if (isFinished) {
        scale.value = withSpring(0);
      }
    })})
  const showTipAnimation = useCallback(() => {
    scale2.value = withSpring(6, undefined, isFinished => {
      if (isFinished) {
        scale2.value = withSpring(0);
      }
    })})


    useEffect(() => {
    showTipAnimation()
    }, [])

  const returnScrollView = () => {
    return (
      <TapGestureHandler numberOfTaps={2} onActivated={showSentAnimation}>
        <Animated.View>
          {/* <AnimatedView style={[styles.ViewTip, tipStyle]}><Text>DO SOMETHING</Text></AnimatedView> */}
          <AnimatedView style={[styles.ViewIcon, rStyle]}>
            <DateButton
              extraStyle={styles.centerIcon}
              evelopeSize={160}
              heartSize={110}
            />
          </AnimatedView>
          <ScrollView
            horizontal
            decelerationRate={'fast'}
            snapToInterval={CARD_WIDTH + 0}
            snapToAlignment="center"
            disableIntervalMomentum={true}>
            {cards.map((users, index) => (
              <View key={index} style={styles.wrapper}>
                <CompleteHotScreen
                  verified={users.verified}
                  useThisGallery={users.gallery}
                  username={users.username}
                  image={users.source}
                  level={users.level}
                  dept={users.department}
                  onPressDateButton={showSentAnimation}>
                  {users.likes.map((like, index) => (
                    <SelectBox key={like + index * Math.random} likes={like} />
                  ))}
                  {/* <Button title="show Toast" /> */}
                </CompleteHotScreen>
              </View>
            ))}
          </ScrollView>
        </Animated.View>
      </TapGestureHandler>
    );
  };
  
  // let container = (
  //   <View style={styles.errorScreen}>
  //     <LottieView source={require('../ASSETS/12701-no-internet-connection.json')} autoPlay loop />
  //     <TouchableWithoutFeedback onPress={() => setRelaod(prev => prev + 1)}>
  //       <View style={styles.refreshBtn}>
  //         <Text style={styles.refreshText}>Reload page</Text>
  //       </View>
  //     </TouchableWithoutFeedback>
  //   </View>
  // )
  
  const container = (
    <SafeAreaView style={styles.container}>{returnScrollView()}</SafeAreaView>
  )

  return container
};

const mapStateToProps = state => {
  return{
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return{

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HotlistsScreen)

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
  ViewIcon: {
    display: 'none',
    height: 200,
    width: scale(150),
    // backgroundColor: 'white',
    position: 'absolute',
    top: CARD_HEIGHT / 4,
    bottom: 0,
    right: Dimensions.get('window').width / 4,
    // left: scale(70),
    zIndex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewTip: {
    display: 'none',
    height: scale(50),
    // width:'90%',
    backgroundColor: 'red',
    position: 'absolute',
    top:0,
    bottom: 0,
    right: scale(10),
    left: scale(10),
    zIndex: 7,
    justifyContent: 'center',
    alignItems: 'center',
    opacity:0
  },
  errorScreen: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff'
  },
  refreshBtn:{
    height: scale(40),
    width: scale(150),
    borderWidth: 1,
    borderColor: '#DE5295',
    borderRadius: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: scale(100),
    alignSelf: 'center'
  },
  refreshText: {
    fontWeight: 'bold',
    fontSize: scale(16),
    color: '#DE5295',
    letterSpacing: 1
  }
});
