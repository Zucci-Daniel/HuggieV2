import React, {useEffect, useState} from 'react';
import MasonryList from 'react-native-masonry-list';
import ImageLayout from 'react-native-image-layout';
//...
import MiniProfileDisplay from '../COMPONENTS/MiniProfileDisplay';
import {FlatList, Image,StyleSheet, Text, View} from 'react-native';
import Screen from '../COMPONENTS/Screen';
import { scale } from 'react-native-size-matters';
import {connect} from 'react-redux';
import * as actions from '../Redux/Actions/index';

import LoadingScreen from '../COMPONENTS/loadingScreen';
import axios from 'axios';

function EveryOneScreen(props) {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async() => {
    axios.get('https://huggie.herokuapp.com/api/profiles/')
      .then(r => {
          console.log(r.data.results);
          setPosts(r.data.results)
          setLoading(false);
      })
      .catch(e => {
          console.log(e);
          setLoading(false)
      })
  }
  
  // const container = (
  //   <Screen extraStyles={styles.ScreenExtraStyles}>
  //   <FlatList
  //    data={cards}
  //    keyExtractor={(item)=>item.id}
  //    numColumns={2}
  //    renderItem={({item,index})=><MiniProfileDisplay 
  //        username={item.username}
  //        department={item.department}
  //        level={item.level}
  //        image={item.source}
  //      />
  //    }
  //   />
  //  </Screen>
  // )

  let container  = (
    <View style={{backgroundColor: 'red', height: '100%', width: '100%', position: 'absolute', top: 0}}></View>
  )

  if(posts){
    container = (
      <Screen extraStyles={styles.ScreenExtraStyles}>
        <FlatList
        data={posts}
        keyExtractor={(item)=>item.id}
        numColumns={2}
        renderItem={({item,index})=><MiniProfileDisplay 
            username={item.user.username}
            department={item.department}
            level={item.level}
            image={item.profile_pic}
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

const mapDispatchToProps = dispatch => {
  return{
    setPost: () => dispatch({type: 'POSTS', value: 'Hello world'})
  }
}

export default connect(null, mapDispatchToProps)(EveryOneScreen)

const styles=StyleSheet.create({
ScreenExtraStyles:{
    paddingBottom:'40%',
    justifyContent:'center',
    alignItems:'center'
  }
})