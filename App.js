// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Alert, SafeAreaView, TouchableNativeFeedback,
         Button, StatusBar, Platform} from 'react-native';

export default function App() {

  // let x = 1;
  console.log("App executed");

  // const handlePress = () => {console.log("Text has been clicked")};

  console.log(require('./assets/icon.png'));

  
  return (
    // <View style={styles.container}>
    //   <Text onPress={handlePress}>Hello React native! - Let;s make this a really long text and see what we can do with all this!</Text>
    //   <TouchableNativeFeedback onPress={()=> console.log('image tapped')}>
    //       <Image 
    //       blurRadius={1}
    //       fadeDuration={1000}
    //       source={{
    //         width:200,
    //         height:300,
    //         uri: "https://picsum.photos/200/300"}}/> */}

    //        <View style={ {width:200, height: 70, backgroundColor:"dodgerblue"}}>

    //         </View>

    //   </TouchableNativeFeedback>
    // </View>

    <SafeAreaView>
        {/* <Button color="orange" title="click me!" onPress={ () => Alert.alert(
          "My Tittle", "My message", [
            {text:"yes", onPress: ()=> console.log("User clicked Yes")},
            {text:"no", onPress: ()=> console.log("User clicked No")}
          ]
        )}/> */}


        <Button color="orange" title="click me!" onPress={ () => Alert.prompt(
          "My Tittle", "My message", (text) => console.log(text)
        )}/>
    </SafeAreaView>

      // <SafeAreaView style={[styles.container, containerStyle]}>



      // </SafeAreaView>
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
