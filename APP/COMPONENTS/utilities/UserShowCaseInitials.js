import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import colors from '../../config/colors'
import Details from './Details'
import ProfileName from './ProfileName'
import SelectBox from './SelectBox'
import VerifiedIcon from './VerifiedIcon'
import { scale,ScaledSheet } from 'react-native-size-matters';


export default function UserShowCaseInitials({ extraStyles, username, dept, level, children,onPress }) {
    return (
        <View style={[styles.UserShowCaseInitials,extraStyles]}>
        <View style={styles.UserShowCaseDetails}>
            <View style={styles.initialsPane}>
            <TouchableWithoutFeedback>
                <ProfileName extraStyles={styles.userName} username={username} />
            </TouchableWithoutFeedback>
           {/* <VerifiedIcon /> */}
            </View>
            <Details extraStyles={styles.details} department={dept} level={level}/>
                <View style={styles.selectionPane}>
                    {children}
                </View>
            </View>
        </View>
    )
}

const styles = ScaledSheet.create({
    UserShowCaseInitials: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingVertical: scale(2),

    },
    UserShowCaseDetails: {
        padding: scale(15),
        width: '90%',
        backgroundColor: 'rgba(249, 249, 249, 0.79)',
        borderTopLeftRadius: scale(30),
        borderBottomLeftRadius: scale(30),
        position: 'relative',
        paddingLeft: scale(16),

    },
    initialsPane: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // marginTop:'1%'
    },
    userName: {
        color: colors.dark,
        marginRight: 5,
        fontSize: '14@s'
    },
    details: {
        fontSize: '10@s',
        color: colors.fadedDark
    },
    selectionPane: {
        marginTop: '5@s',
        flexWrap: 'wrap',
        flexDirection: 'row',
    }
})
