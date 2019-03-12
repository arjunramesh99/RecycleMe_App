import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import firebase from '@firebase/app';
import 'firebase/storage';
import 'firebase/database';
import '@firebase/auth';
import RNFetchBlob from 'react-native-fetch-blob';
import {YellowBox} from 'react-native';
import UploadComplete from './UploadComplete';

export default class ProcessImage extends Component {

	state = {
		uploaded: 0
	}

	uploadImage = () => {
		const image = this.props.navigation.getParam('imageData', 'No Image');
		const category = this.props.navigation.getParam('category', 'NULL');
		const tag = this.props.navigation.getParam('tag', 'NULL');

		const Blob = RNFetchBlob.polyfill.Blob;
    const fs = RNFetchBlob.fs;
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
    window.Blob = Blob;

    let uploadBlob = null;
		var randKey = Math.random() * 100;
		const imageRef = firebase.storage().ref('images').child(category + "_" + tag + "_" + randKey +  ".jpg");
    let mime = 'image/jpg';
    Blob.build(image.base64, { type: `${mime};BASE64` })
			.then((blob) => {
						uploadBlob = blob
    				return imageRef.put(blob, { contentType: mime });
					})
					.then(() => {
						uploadBlob.close();
				    return imageRef.getDownloadURL();
					})
					.then((url) => {
						console.log(url);
						firebase.database().ref('imageURLs/').push({url: url, category: category, tag: tag});
						this.setState({uploaded: 1});
					})
					.catch((error) => {
						console.log(error);
					})
  }

	componentWillMount() {
		YellowBox.ignoreWarnings(['Setting a timer']);
		this.uploadImage();
	}

	render() {
		if (!this.state.uploaded) {
			return (
				<View style = {styles.message_container}>
					<Text style = {styles.message}> {'Processing your image...\n Please wait a couple of seconds while we retrieve your image.'} </Text>
				</View>
			);
		}
		else {
			return (
				<UploadComplete nav = {this.props.navigation}/>
			);
		}
	}
};

const styles = StyleSheet.create({
	message: {
    color: "green",
    fontSize: 20,
    fontWeight: "bold",
		textAlign: "center"
  },
	message_container: {
		flex: 0.8,
		justifyContent: 'center',
		alignItems: 'center',
		paddingRight: 10,
		paddingLeft: 10
	}
})
