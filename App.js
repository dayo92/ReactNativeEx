// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View} from 'react-native';

export default function App() {

  
  return (

    <View 
    //container
      style={{
        backgroundColor: '#fff',
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        // alignContent:'center',
        // flexWrap:'wrap'
    }}>
        <View style={{backgroundColor:"dodgerblue", 
        // width:100, 
        height:100, 
        flexBasis:100 //with or height
        }}></View>
        <View style={{backgroundColor:"gold", width:100, height:100 , top:20, left:20, position:'absolute'}}></View>
        <View style={{backgroundColor:"tomato", width:100, height:100 }}></View>
        {/* <View style={{backgroundColor:"gray", width:100, height:100 }}></View> */}
        {/* <View style={{backgroundColor:"greenyellow", width:100, height:100 }}></View> */}

    </View>
   
  );
}


