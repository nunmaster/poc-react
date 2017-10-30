import React, { Component } from "react";
import { View, Image} from "react-native";

import {ascendImage} from "~/assets";

export default class extends Component {
	render() {
		return (
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<Image
					source={ascendImage}
					style={{ width: 225, height: 225 }}
				/>
			</View>
		);
	}
}