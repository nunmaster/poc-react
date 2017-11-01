import React, { Component } from "react";
import { Text, View, Image} from "react-native";
import images from '../../assets/images';
export default class extends Component {
	render() {
		return (
			<View style={{alignItems: 'center'}}>
				<Image
					source={images.ascendImage}
					style={{ width: 225, height: 225 }}
				/>
			</View>
		);
	}
}