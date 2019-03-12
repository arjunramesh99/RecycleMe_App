import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Classify from './components/Classify';
import ProcessImage from './ProcessImage'
import Camera from './App';
import firebase from '@firebase/app';


export const MainNavigatorObj = createStackNavigator({
	CameraScreen: Camera,
  ClassifyScreen: Classify,
	ProcessingScreen: ProcessImage
},
{
  initialRouteName: "CameraScreen"
},
);

const AppContainer = createAppContainer(MainNavigatorObj);

export default class MainNavigator extends Component {

	initFirebase() {
		// Initialize Firebase
		var config = {
			apiKey: "AIzaSyBWHrdw9CCSXU7qVJ1Uj92R0aH3M6hR5mg",
			authDomain: "recycleme-f63a1.firebaseapp.com",
			databaseURL: "https://recycleme-f63a1.firebaseio.com",
			projectId: "recycleme-f63a1",
			storageBucket: "recycleme-f63a1.appspot.com",
			messagingSenderId: "921274326573"
		}
		firebase.initializeApp(config);
		console.log("Firebase Initialized.");
	}

	componentWillMount() {
		console.log("App Mounted");
		try{
			this.initFirebase();
		} catch(err) {
			console.log('Firebase initialization error')
		}

	}

	render() {
		return (
			<AppContainer />
		);
	}
};
