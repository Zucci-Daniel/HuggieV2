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
import EmptyDiv from '../COMPONENTS/EmptyDiv';


function HotlistsScreen(props) {
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
  }, []);

  useEffect(() => {
    if(props.posts){
      console.log(props.posts.length)
    }
  }, [props.posts]);

  const reload = () => {
    const number = Math.random();
    props.setReload(number);
  }

  let returnScrollView = () => {
    return <Text>Hello</Text>
  }
  if(props.posts){
  returnScrollView = () => {
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
            {props.posts.map((users, index) => (
              <View key={index} style={styles.wrapper}>
                <CompleteHotScreen
                  verified={users.verified}
                  useThisGallery={[users.picture_1, users.picture_2, users.picture_3, users.picture_4, users.picture_5, users.picture_6]}
                  username={users.user.username}
                  image={users.profile_pic}
                  level={users.level}
                  dept={users.department}
                  bio={users.description}
                  institution={users.institution}
                  onPressDateButton={showSentAnimation}>
                  {[users.attribute_1, users.attribute_2, users.attribute_3, users.attribute_4, users.attribute_5].map((like, index) => (
                    <SelectBox key={index} likes={like} />
                  ))}
                </CompleteHotScreen>
              </View>
            ))}
          </ScrollView>
        </Animated.View>
      </TapGestureHandler>
    );
  }
}
  
  let container = (
    <View style={styles.errorScreen}>
      <LottieView source={require('../ASSETS/12701-no-internet-connection.json')} autoPlay loop />
      <TouchableWithoutFeedback onPress={reload}>
        <View style={styles.refreshBtn}>
          <Text style={styles.refreshText}>Reload page</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
  
  if(props.posts.length !== 0){
     container = (
    <SafeAreaView style={styles.container}>{returnScrollView()}</SafeAreaView>
  )}else{
    container = (
      <EmptyDiv />
    )
  }

  return (
    <>
      {props.loading ? <LoadingScreen /> : container }
    </>
  )
};

const mapStateToProps = state => {
  return{
    posts: state.posts,
    loading: state.loading2
  }
}

const mapDispatchToProps = dispatch => {
  return{
    setReload: (val) => dispatch({type: 'RELOAD', value: val})
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
