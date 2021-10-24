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