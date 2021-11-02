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
import AsyncStorage from '@react-native-async-storage/async-storage';
import EmptyDiv from '../COMPONENTS/EmptyDiv';
// import { template } from '@babel/core';

const Defaultlink = 'https://huggie.herokuapp.com/api/profiles/';

function EveryOneScreen(props) {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const [link, setLink] = useState(Defaultlink);
  const [next, setNext] = useState();
  const [fetch, setFetch] = useState(false)

  useEffect(() => {
    init();
    // console.log(props.reload)
  }, [props.reload]);

  const init = async() => {
    try {
      // const inst = await AsyncStorage.getItem('@searchInst');
      // const lev = await AsyncStorage.getItem('@searchLev');
      const gender = await AsyncStorage.getItem('@sex')

      const newLink = Defaultlink + '?q=' + gender
      console.log(newLink, 'newLink')
      setLink(newLink);
      fetchPosts(newLink)
      // console.log(inst, lev, gender)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchPosts = async(newLink) => {
    // props.setLoading(true)
    console.log('started')
    axios.get(newLink)
      .then(r => {
          // if(r.data.next){
          //   setNext(r.data.next)
          // }
          // console.log(r.data.next, 'fetched');
          // const arr = [...posts];
          // console.log(r.data, 'data')
          // setPosts(arr);
          // props.setPost(arr);
          setLoading(false);
          // props.setLoading(false);
          // setFetch(false)
          console.log(r.data.results);
          const data = r.data.results;
          const arr = [...posts]
          data.map(i => arr.push(i))
          setPosts(arr)
      })
      .catch(e => {
          console.log(e);
          setLoading(false);
          props.setLoading(false);
          setFetch(false)
      })
    // console.log('Hello world')
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
    const number = Math.random();
    // console.log(number)
    props.setReload(number);
  }

  const fetchnewPosts = () => {
    setFetch(true);
    fetchPosts(next);
  }

  const newDiv = (
    <View style={styles.loadNewPosts}>
        <Text style={styles.reloadText}>Fetching posts...</Text>
      </View>
  )

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
        onEndReached={fetchnewPosts}
        />
        {fetch ? newDiv : null}
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
    setReload: (val) => dispatch({type: 'RELOAD', value: val})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EveryOneScreen)

const styles=StyleSheet.create({
  ScreenExtraStyles:{
    // paddingBottom:'40%',
    justifyContent:'center',
    alignItems:'center',
    marginBottom: 100
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
  },
  loadNewPosts: {
    height: 50,
    width: 170,
    backgroundColor: 'rgba(225,225,225,0.6)',
    borderRadius: 25,
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  reloadText: {
    fontSize: 14,
    color: '#000',
    opacity: 0.7,
    letterSpacing: 1.5
  }
})