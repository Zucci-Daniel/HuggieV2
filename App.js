<<<<<<< HEAD
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
//redux imports
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './APP/Redux/Reducers/reducer';
import MainScreen from './APP/SCREENS/MainScreen';

/////////////    redux settings     ///////////////////

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)
//////////////    redux settings     /////////////////

const App = () => {
    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>
    )
};

const styles=StyleSheet.create({
  GestureHandlerRootView:{
    flex: 1,
  }
})

export default App;
=======
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import InsideApp from './APP/APP_NAVIGATION/InsideApp';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import LightningModal from './APP/LightningModal';
export default function App() {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <InsideApp />
      {/* <LightningModal /> */}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
>>>>>>> 9930650f3917eb5ab975f238f4f1ab4acc1ec401
