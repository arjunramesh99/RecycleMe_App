import React, {Component} from 'react';
import { Picker, View, StyleSheet, Text } from 'react-native';

export default class CategoryPicker extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedItem: this.props.list[0]
		}
		this.updateItem = this.updateItem.bind(this);
	}

	componentDidMount = () => {
		this.updateItem(this.props.list[0]);
	}

	updateItem = itemValue => {
		this.props.updateClass(itemValue)
		this.setState({selectedItem: itemValue})
	}

	renderList() {
		return this.props.list.map(it => <Picker.Item key={it} label={it} value={it} />)
	}

	render() {
		return (
			<View>
				<Picker
					selectedValue = {this.state.selectedItem}
					style = {styles.selectedItem}
					itemStyle = {styles.item}
					prompt = {this.props.title}
					onValueChange = {this.updateItem} >
					{this.renderList()}
				</Picker>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	selectedItem: {
		height: 50,
		color: 'green',
		marginRight: 10
	},

	item: {
		fontSize: 40,
		color: 'green',
	}
})
