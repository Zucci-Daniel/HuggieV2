import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import colors from '../config/colors'
import BubbleImage from './utilities/BubbleImage'
import Date from './utilities/Date'
import Details from './utilities/Details'
import GreenLight from './utilities/GreenLight'
import MessageCircle from './utilities/MessageCircle'
import PlainImage from './utilities/PlainImage'
import ProfileName from './utilities/ProfileName'
import RedLight from './utilities/RedLight'

export default function RequestPane({ profilePicture, profileName, title, date, messages,department,level,onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.profilePane}>
            <View style={styles.firstPane}>
                <View style={styles.profilePicture}>
                    <PlainImage source={profilePicture} />
                </View>
                <View style={styles.initials}>
                    <ProfileName username={profileName} />
                    <Details department={department} level={level} />
                </View>
            </View>
            <View style={styles.secondPane}>
                <RedLight />
                <GreenLight />
            </View>

        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    profilePane: {
        height: 85,
        backgroundColor: colors.white,
        flexDirection: 'row',
        paddingHorizontal:10,
        margin:0
    },
    firstPane: {
        width: '70%',
        flexDirection: 'row',
        paddingHorizontal:5
    },
    profilePicture: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    initials: {
        backgroundColor: colors.white,
        width: '80%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 10

    },
    secondPane: {
        width: '30%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
       

    },



})
