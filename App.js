// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Alert, SafeAreaView, TouchableNativeFeedback,
         Button, StatusBar, Platform, Dimensions} from 'react-native';

import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';

export default function App() {

  // console.log("App executed");
  //to see with and height of phone
  // console.log(Dimensions.get('screen'));
  //Dimensions update when phone is on portrait or landscape
  // console.log(useDimensions(),"test")
  //returs object with properties true/false for currrent position of portrait and landscape
  // console.log(useDeviceOrientation());

  const {landscape} = useDeviceOrientation();
  
  return (

    <SafeAreaView style={styles.container}>
        <View style={{
          backgroundColor:"dodgerblue",
          width:'100%',
          //if phone is on landscape chage height to 100% else 30%
          height: landscape ? '100%' : '30%'
        }}></View>
    </SafeAreaView>

   
  );
}

const containerStyle = {backgroundColor:"orange"}
;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
});
