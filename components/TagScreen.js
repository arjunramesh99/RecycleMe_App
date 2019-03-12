import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

type Props = {};


export default class TagScreen extends Component {
    render() {
      const imageData = this.props.navigation.getParam('imageData', 'No Image');
      console.log(imageData);
      return (
        <Image style = {{flex: 1, width: 100, height: 200}} 
               source = {{uri: imageData.uri}} />
      );
    }
};
