import React from 'react';

import { View,Button } from 'react-native';

import { useBottomModal, BottomModal, } from 'react-native-lightning-modal';


export default function App() {
  const { dismiss, show, modalProps } = useBottomModal();


  return (
    <View style={{flex: 1,backgroundColor:"blue",width:"100%"}} onPress={()=>dismiss()}>
      <Button title="show" onPress={()=>show()} />
      <BottomModal height={1500}
      backdropColor="red"
      {...modalProps}>
      <Button title="dismiss" onPress={()=>dismiss()} />
        {/* Your Content */}
      </BottomModal>
    </View>
  );
}