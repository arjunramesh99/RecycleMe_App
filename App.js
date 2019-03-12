import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {createStackNavigator, createAppContainer} from 'react-navigation';


export default class Camera extends React.Component {
  static navigationOptions = {
     title: 'Capture an Image',
     headerTitleStyle :{textAlign: 'center', alignSelf:'center', flex: 1},
     headerStyle:{
         backgroundColor:'white',
     },
 };
  render() {
    return (
      <View style = {styles.container}>
          <RNCamera captureAudio = {false}
                    style = {styles.campreview}
                    ref={cam => this.camera = cam}
                    >
          <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity onPress={this.clickPhoto.bind(this)} style={styles.button_style}>
            <Image
              source={require('./assets/RecycleBin.png')} style = {styles.capture_image_style}
            />
            </TouchableOpacity>
          </View>
          </RNCamera>
      </View>
    );
  }

  clickPhoto = async function() {
    const {navigate, replace} = this.props.navigation;
    if (this.camera) {
      console.log("Photo button clicked!");
      const options = {base64: true, fixOrientation: true};
      const data = await this.camera.takePictureAsync(options);
      replace('ClassifyScreen', {
        imageData: data
      });
    }
  };
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: 'black',
     flexDirection: 'column'
   },
   campreview: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'flex-end'
   },
   button_style: {
     /*flex: 0,
     padding: 15,
     paddingHorizontal: 20,
     margin: 20,
     backgroundColor: 'green',
     borderRadius: 35,
     alignSelf: 'center',*/
   },
   font: {
     fontSize: 10,
     alignSelf: 'center'
   },
   capture_image_style: {
     width: 28 * 4,
     height: 32 * 4,
     margin: 20
   }
});
