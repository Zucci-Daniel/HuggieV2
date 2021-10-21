import React from 'react';
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

const iconConfig = {
  // color:colors.brandColor,
};

const unfocused = 'rgba(234, 82, 160, 1.63)';

const BottomTab = createBottomTabNavigator();

export default function InsideApp() {
  return (
    <>
      <AppStatusBar backgroundColor={colors.brandColor} />

      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={({route}) => ({
            title: '',
            header: ({navigation}) => <AppHeader><Text onPress={()=>navigation.navigate('MyProfileNav')}>My Profile</Text></AppHeader>,
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
                  <Icons
                    name="ios-heart-sharp"
                    color={focused ? colors.white : colors.brandColor}
                    size={focused ? scale(30) : size}
                    style={focused ? styles.iconFocused : styles.iconUnFocused}
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
                    size={focused ? scale(30) : size}
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
                  <Icons2
                    name="grin-hearts"
                    color={focused ? colors.white : colors.brandColor}
                    size={focused ? scale(30) : size}
                    style={focused ? styles.iconFocused : styles.iconUnFocused}
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
                    size={focused ? scale(30) : size}
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
    </>
  );
}

const HEIGHT = Dimensions.get('window').height * 0.09;

const styles = ScaledSheet.create({
  BottomBarStyles: {
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: '1@s',
    borderRadius: '15@s',
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
    paddingHorizontal: '10@s',
    paddingVertical: '7@s',
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
  // sentToTop:{
  //   position:'absolute'
  // }
});
