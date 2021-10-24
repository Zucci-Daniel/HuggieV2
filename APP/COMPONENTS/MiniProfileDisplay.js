import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Details from './utilities/Details';
import ProfileName from './utilities/ProfileName';
import LinearGradient from 'react-native-linear-gradient'; // import LinearGradient
import colors from '../config/colors';

export default function MiniProfileDisplay({
  image,
  username = 'Becky lynch',
  department = 'Edu English',
  level = '400',
  extraStyles,
}) {
  return (
    <View style={styles.MiniProfileDisplay}>
      <Image source={image} style={styles.image} resizeMode={'cover'} />
      <LinearGradient
        colors={['rgba(6,6,6,0.4738095067128414)', 'rgba(2,0,36,1)']}
        style={[styles.linearGradient, styles.initialsWrapper]}>
        <ProfileName username={username} extraStyles={{color: colors.white}} />
        <Details
          department={department}
          level={level}
          extraStyles={{color: colors.white}}
        />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  MiniProfileDisplay: {
    height: 400,
    width: 250,
    flexWrap: 'wrap',
    margin: 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  initialsWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    padding: 10,
  },
});
