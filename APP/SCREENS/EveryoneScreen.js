import React, {useEffect, useState} from 'react';
import MasonryList from 'react-native-masonry-list';
import ImageLayout from 'react-native-image-layout';
//...
import MiniProfileDisplay from '../COMPONENTS/MiniProfileDisplay';
import {FlatList, Image,StyleSheet, Text, View ,TouchableWithoutFeedback} from 'react-native';
import Screen from '../COMPONENTS/Screen';
import { scale } from 'react-native-size-matters';
import {connect} from 'react-redux';
import * as actions from '../Redux/Actions/index';
import axios from 'axios';

import LoadingScreen from '../COMPONENTS/loadingScreen';
import LottieView from 'lottie-react-native';
// import { template } from '@babel/core';

function EveryOneScreen(props) {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetchPosts()
  }, [props.reload])

  const fetchPosts = async() => {
    props.setLoading(true)
    axios.get('https://huggie.herokuapp.com/api/profiles/')
      .then(r => {
          console.log('fetched')
          setPosts(r.data.results);
          props.setPost(r.data.results);
          setLoading(false);
          props.setLoading(false)
      })
      .catch(e => {
          console.log(e);
          setLoading(false);
          props.setLoading(false)
      })
    console.log('Hello world')
  };

  const updateArray = (id) => {
    const arr = [...posts];
    const newArr = arr.splice(id);
    
    props.setPost(null);
    props.navigation.navigate({ name: 'hotlistScreen', merge: true });
    setArr(newArr)
    console.log('finished');

  }

  const setArr = (newArr) => {
    props.setPost(newArr);
    console.log('done')
  }

  const reload = () => {
    props.setReload();
  }

  let container  = (
    <View style={styles.errorScreen}>
      <LottieView source={require('../ASSETS/12701-no-internet-connection.json')} autoPlay loop />
      <TouchableWithoutFeedback onPress={reload}>
        <View style={styles.refreshBtn}>
          <Text style={styles.refreshText}>Reload page</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )

  if(posts){
    container = (
      <Screen extraStyles={styles.ScreenExtraStyles}>
        <FlatList
        data={posts}
        keyExtractor={(item)=>item.id}
        numColumns={2}
        renderItem={({item,index})=><MiniProfileDisplay 
            value={index}
            username={item.user.username}
            department={item.department}
            level={item.level}
            image={item.profile_pic}
            updateArray={updateArray}
          />
        }
        />
      </Screen>
    )
  }

  return (
    <>
      {!loading ? container : <LoadingScreen /> }
    </>
  );
}

const mapStateToProps  = state => {
  return{
    reload: state.reload
  }
}

const mapDispatchToProps = dispatch => {
  return{
    setPost: (val) => dispatch({type: 'POSTS', value: val}),
    setLoading: (val) => dispatch({type: 'LOADING2', value: val}),
    setReload: () => dispatch({type: 'RELOAD'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EveryOneScreen)

const styles=StyleSheet.create({
  ScreenExtraStyles:{
    paddingBottom:'40%',
    justifyContent:'center',
    alignItems:'center',
  },
  errorScreen: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff'
  },
  refreshBtn:{
    height: scale(40),
    width: scale(150),
    borderWidth: 1,
    borderColor: '#DE5295',
    borderRadius: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: scale(100),
    alignSelf: 'center'
  },
  refreshText: {
    fontWeight: 'bold',
    fontSize: scale(16),
    color: '#DE5295',
    letterSpacing: 1
  }
})