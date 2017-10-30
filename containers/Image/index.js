import React, { Component } from "react";
import { View, Image} from "react-native";
export default class extends Component {
	render() {
		return (
			<View style={{alignItems: 'center'}}>
				<Image
					source={require('./ascend.png')}
					style={{ width: 225, height: 225 }}
				/>
			</View>
		);
	}
}