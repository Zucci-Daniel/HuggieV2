import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import colors from '../config/colors'
import BubbleImage from './utilities/BubbleImage'
import Date from './utilities/Date'
import Details from './utilities/Details'
import MessageCircle from './utilities/MessageCircle'
import RedLight from './utilities/RedLight'
import ProfileName from './utilities/ProfileName'
import { scale, ScaledSheet } from 'react-native-size-matters';

export default function ProfilePane({ profilePicture, profileName, title, date, messages, onPress,lightColor,department,level }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.profilePane}>
                <View style={styles.firstPane}>
                    <View style={styles.profilePicture}>
                        <BubbleImage picture={profilePicture} />
                        <RedLight extraStyle={[styles.extraStyle,{backgroundColor:lightColor}]} />
                    </View>
                    <View style={styles.initials}>
                        <ProfileName username={profileName
                        } />
                        {!messages?<Details department={department} level={level} />:<Text style={styles.messages}>{messages}</Text>}
                    </View>
                </View>
                <View style={styles.secondPane}>
                    <Date date={date}/>
                   
                </View>
            </View>
        </TouchableOpacity>
    )
}
const styles = ScaledSheet.create({
    profilePane: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        margin: '2@s',
        marginHorizontal: '5@s',
    },
    firstPane: {
        width: '85%',
        flexDirection: 'row'
    },
    profilePicture: {
        padding: '1@s',
        justifyContent: 'center',
        alignItems: 'center',
        position:'relative'
    },
    initials: {
        backgroundColor: colors.white,
        width: '70%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: '1@s'

    },
    secondPane: {
        width: '15%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: '3@s'
    },

    extraStyle:{
        height:scale(15),
        width: scale(15),
        position:'absolute',
        top:0,
        right:scale(5)
    },
    messages:{
        color:colors.dark,
        fontSize:13,
        fontWeight:'bold'
    }

})
