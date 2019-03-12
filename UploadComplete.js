import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import LinearGradient from "react-native-linear-gradient";

export default class UploadComplete extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.message_container}>
          <Text style={styles.message}>
            {" "}
            {"\t"}We got your Image!{"\t"}{" "}
          </Text>
        </View>

        <View style={styles.icon}>
          <Image source={require("./assets/Earth.png")} />
        </View>

        <View style={styles.button_container}>
          <TouchableOpacity onPress = {() => this.props.nav.replace("CameraScreen")}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#A8EB12", "#055308"]}
              style={styles.button_gradient}
            >
              <Image
                style={styles.button_image}
                source={require("./assets/Reload.png")}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column"
  },
  message_container: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center"
  },
  message: {
    color: "green",
    fontSize: 40,
    fontWeight: "bold"
  },
  icon: {
    flex: 7,
    paddingBottom: 80,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  button_container: {
    flex: 1.5,
    alignItems: "center",
    paddingBottom: 10
  },
  button_gradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100
  },
  button_image: {
    width: 45,
    height: 45
  }
});
