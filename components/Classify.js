import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import CategoryPicker from './CategoryPicker';
import LinearGradient from "react-native-linear-gradient";

const item_category = ['Recycle', 'Compost', 'Landfill'];
const item_list = ['OTHER', 'Clothing', 'Coffee Cups', 'Food', 'Fountain Drink Cups', 'Glass Containers', 'Metal Cans or Utensils', 'Milk Cartons (Empty)', 'Nappies', 'Paper Plates', 'Plastic Bags', 'Plastic Bottles or Cups (Empty)', 'Plastic \"Clam-Shell\" Containers (Take-Out)', 'Printed Paper', 'Receipts', 'Soiled Cardboard and Pizza Boxes', 'Styrofoam', 'Wrappers (Candy, Chocolate, Chips)'];

export default class Classify extends React.Component {
  static navigationOptions = {
     title: 'Classify this object for us!',
     headerTitleStyle :{textAlign: 'center', alignSelf:'center', flex: 1},
     headerStyle:{
         backgroundColor:'white',
     },
 };
  state = {
    category: '',
    tag: '',
  }

  storeImage = () => {
    Alert.alert(`Category: ${this.state.category}\nTag: ${this.state.tag}`)
  }
  updateImageCategory = category => {
    this.setState({category})
  }

  updateImageTag = tag => {
    this.setState({tag})
  }

  render() {
    const {navigate, replace} = this.props.navigation;
    const imageData = this.props.navigation.getParam('imageData', 'No Image');
    return (
      <View style={styles.container}>
	  	{/* Image Section */}
	  	<View style={styles.image_section} >
      <Image style = {{flex: 1}}
           source = {{uri: imageData.uri}} />
      </View>

		{/* Categorization Section */}
		<View style={styles.categorization_section}>
			<View style={{flex: 0.4}}>
				{/* Waste Category */}
				<CategoryPicker title='Guess The Category (No looking up!)' list={item_category} updateClass={this.updateImageCategory}/>
			</View>

			<View style={{flex: 0.6}}>
				{/* Item Tag */}
				<CategoryPicker title='CAREFULLY tag the item!' list={item_list} updateClass={this.updateImageTag}/>
			</View>
		</View>

		<View style={styles.button_section}>
			{/* Back Button */}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#4B8EF2", "#191987"]}
        style={styles.back_button_gradient}
      >
			<TouchableOpacity style={styles.back_button} onPress = {() => replace("CameraScreen")}>
        <Image
					style={styles.back_button_image}
					source={require('../assets/Buttons/Back.png')}
				/>
			</TouchableOpacity>
      </LinearGradient>

			{/* Submit Button */}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#A8EB12", "#055308"]}
        style={styles.submit_button_gradient}
      >
			<TouchableOpacity style={styles.submit_button} onPress = {() => replace("ProcessingScreen", {imageData: imageData, category: this.state.category, tag: this.state.tag})}>
        <Image
					style={styles.submit_button_image}
					source={require('../assets/Buttons/Submit.png')}
				/>
      </TouchableOpacity>
      </LinearGradient>
    </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  image_section: {
	flex: 0.86,
	backgroundColor: 'black',
  },

  categorization_section: {
	flex: 0.07,
	flexDirection: 'row',
	backgroundColor: 'white',
  },

  button_section: {
	flex: 0.07,
	flexDirection: 'row',
  justifyContent: 'center',
  marginBottom: 2
	//backgroundColor: 'pink',
  },

  back_button: {
	flex: 1,
  flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	width: 300
  },

  submit_button: {
	flex: 1,
  flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
  width: 300
  },

  submit_button_image: {
	  height: 30,
	  width: 42,
	  alignItems: 'center',
  },

  back_button_image: {
	height: 28,
	width: 45,
	alignItems: 'center',
},

back_button_gradient: {
  flex: 0.3,
  marginLeft: 2,
  marginRight: 2,
  borderRadius: 5,
  borderBottomLeftRadius: 30,
  justifyContent: "center",
  alignItems: "center",
  //height: 100,
  //width: 200
},
submit_button_gradient: {
  flex: 0.7,
  marginRight: 2,
  borderRadius: 5,
  borderBottomRightRadius: 30,
  justifyContent: "center",
  alignItems: "center",
},
});
