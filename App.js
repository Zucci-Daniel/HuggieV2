import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
//redux imports
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './APP/Redux/Reducers/reducer';
import MainScreen from './APP/SCREENS/MainScreen';
import SplashScreen from 'react-native-splash-screen';
import Toast, {InfoToast} from 'react-native-toast-message';
import colors from './APP/config/colors';
/////////////    redux settings     ///////////////////

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
//////////////    redux settings     /////////////////

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const toastConfig = {
    brandToast: ({text2, props, ...rest}) => (
      <View style={styles.customToast}>
        <Text style={styles.customText}>{text2}</Text>
      </View>
    ),
  };

  return (
    <Provider store={store}>
      <MainScreen />
      <Toast config={toastConfig} ref={ref => Toast.setRef(ref)} />
    </Provider>
  );
};

const styles = StyleSheet.create({
  GestureHandlerRootView: {
    flex: 1,
  },
  customToast: {
    backgroundColor: colors.brandColor,
    borderRadius: 3,
    padding: 15,
    paddingVertical: 30,
    border: 2,
    borderWidth: 3,
    borderColor: colors.white,
  },
  customText: {
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default App;
