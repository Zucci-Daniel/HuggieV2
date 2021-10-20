import React from 'react'
import { StyleSheet, Text, View,Button,Modal} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SentRequestScreen from '../SCREENS/SentRequestScreen';
import ChatScreen from '../SCREENS/ChatScreen';
//config
import tabConfig from '../config/tabConfig';
//components
import ChatHeader from '../COMPONENTS/ChatHeader';
import NormalHeader from '../COMPONENTS/NormalHeader';


const Stack = createNativeStackNavigator();

export default function SentRequestNav() {





    return (
        <Stack.Navigator >  
         <Stack.Screen name="SentRequests" component={SentRequestScreen} 
          options={{ headerShown: true, header: ({ navigation }) => <NormalHeader screenTitle="Sent Requests" /> }}
       />

         {/* <Stack.Screen name="Chats" component={ChatScreen} 
          options={({ route,navigation }) => ({
            header: () => <ChatHeader screenTitle={route.params.thisUser}
              screenImage={route.params.thisUserImage} onPress={() => navigation.pop()} 
              options={({ route }) => ({
                header: () => <ChatHeader screenTitle={route.params.thisUser}
                  screenImage={route.params.thisUserImage} onPress={() => navigation.goBack('SentRequest')} />,
              })}
              />,
          })}
         />    */}
     </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
