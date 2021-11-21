import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'

export default function HotDetails({ children, data}) {
    return (
        <View style={styles.container}>
            {/* <View style={styles.titleWrapper}>
                <Text 
                style={styles.occupation}
                >CEO, Founder of leena's kitchen</Text>
            </View>
                <Text 
                style={styles.university}
                >{data[0]}</Text>
                <Text 
                style={styles.about}
                >About Me</Text>
                <Text 
                style={styles.bio}
                >{data[1]}</Text>

                {children} */}
                <Text>Working</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        width: '100%',
        height: Dimensions.get('window').height * 1,
        padding: '5%',
        position:'relative'
    },
    titleWrapper: {
        backgroundColor: colors.white,
        padding: 5,
        width: '90%',
        borderBottomColor: colors.brandColor,
        borderBottomWidth: 2,
    },
    occupation:{
        fontWeight:'500',
        color:colors.dark,
        fontSize:19,
        textTransform:'capitalize'
    },
    university:{
        marginVertical:15,
        fontWeight:'500',
        color:colors.dark,
        fontSize:16,
    },
    about:{
        color:colors.dark,
        fontWeight:'bold',
        marginTop:40
    },
    bio:{
        color:colors.dark,
        fontWeight:'400',
        marginTop:30,
        lineHeight:20
    }
})
