import React, { useState } from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {scale, ScaledSheet} from 'react-native-size-matters';

//screens
import HotTabNav from './HotTabNav';
import MyProfileNav from './MyProfileNav';
import MyRequestNav from './MyRequestNav';
import SentRequestNav from './SentRequestNav';
//config
import colors from '../config/colors';
//components
import AppHeader from '../COMPONENTS/AppHeader';
import AppStatusBar from '../COMPONENTS/AppStatusBar';
//icons
import Icons from 'react-native-vector-icons/Ionicons';
import Icons2 from 'react-native-vector-icons/FontAwesome5';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import SearchScreen from '../SCREENS/SearchScreen';
import LottieView from 'lottie-react-native';

const iconConfig = {
  // color:colors.brandColor,
};

const unfocused = 'rgba(234, 82, 160, 1.63)';

const BottomTab = createBottomTabNavigator();

export default function InsideApp() {
  const [show, setShow] = useState(true);

  const closeDiv = () => {
    setShow(false)
  }
  const container = (
    <NavigationContainer>
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        title: '',
        header: ({navigation}) => <AppHeader></AppHeader>,
        tabBarStyle: [
          {
            ...styles.BottomBarStyles,
          },
        ],
        tabBarLabel: '',
      })}>
      <BottomTab.Screen
        name="HotTabNav"
        component={HotTabNav}
        options={{
          tabBarColor: '#009387',
          tabBarIcon: ({color, size, focused, style}) => (
            <View style={styles.iconView}>
              {/* <Icons
                name="ios-heart-sharp"
                color={focused ? colors.white : colors.brandColor}
                size={focused ? scale(20) : size}
                style={focused ? styles.iconFocused : styles.iconUnFocused}
              /> */}
              <LottieView source={require('../ASSETS/animation/heart.json')}
              style={{width:focused?59+40:59,aspectRatio:1}}r
              autoPlay={!focused?true:false}
              loop={true}
              />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="SentRequest"
        component={SentRequestNav}
        options={({route}) => ({
          tabBarIcon: ({color, size, focused, style}) => (
            <View style={styles.iconView}>
              <Icons
                name="ios-chatbubbles"
                color={focused ? colors.white : colors.brandColor}
                size={focused ? scale(20) : size}
                style={focused ? styles.iconFocused : styles.iconUnFocused}
              />
            </View>
          ),
        })}
      />
      <BottomTab.Screen
        name="MyRequest"
        component={MyRequestNav}
        options={{
          tabBarIcon: ({color, size, focused, style}) => (
            <View style={styles.iconView}>
              {/* <Icons2
                name="grin-hearts"
                color={focused ? colors.white : colors.brandColor}
                size={focused ? scale(20) : size}
                style={focused ? styles.iconFocused : styles.iconUnFocused}
              /> */}
               <LottieView source={require('../ASSETS/animation/message.json')}
              style={{width:focused?59+40:59,aspectRatio:1}}
              autoPlay
              loop
              />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="MyProfileNav"
        component={MyProfileNav}
        options={({route}) => ({
          tabBarIcon: ({color, size, focused, style}) => (
            <View style={styles.iconView}>
              <Icons2
                name="user-alt"
                color={focused ? colors.white : colors.brandColor}
                size={focused ? scale(20) : size}
                style={[
                  focused ? styles.iconFocused : styles.iconUnFocused,
                  styles.sentToTop,
                ]}
              />
            </View>
          ),
        })}
      />
    </BottomTab.Navigator>
  </NavigationContainer>
  )
  return (
    <>
      <AppStatusBar backgroundColor={colors.brandColor} />
      {show ? <SearchScreen closeDiv={closeDiv} /> : container}
    </>
  );
}

const HEIGHT = Dimensions.get('window').height * 0.07;

const styles = ScaledSheet.create({
  BottomBarStyles: {
    borderTopWidth: 0,
    backgroundColor: colors.white,
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    height: HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 0,
  },
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
    top: '10@s',
    width: '50@s',
  },
  iconFocused: {
    backgroundColor: colors.brandColor,
    borderRadius: '150@s',
    paddingHorizontal: '6@s',
    paddingVertical: '4@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconUnFocused: {
    backgroundColor: 'rgba(249, 249, 249, 0.59)',
    borderRadius: '150@s',
    paddingHorizontal: '10@s',
    paddingVertical: '7@s',
    justifyContent: 'center',
    alignItems: 'center',
  },

});
