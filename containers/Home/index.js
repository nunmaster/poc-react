import React, { Component } from "react";

import { View, Text, Button, FlatList } from "react-native";

export default class Home extends Component {

	static navigationOptions = {
		title: "Home"
	};

	gotoDetail=()=>{
		const { navigation } = this.props;
		navigation.navigate("detail");
		console.log(navigation);
	};

	render() {

		const data = [{key:'a'},{key: 'b'}];		
		return (
			<View style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}>
				<FlatList data={data} renderItem={
					({item})=> 
					<View style={{
						borderWidth:1,
						borderColor: 'red',
						flex: 1,
					}}><Text>{item.key}</Text></View>
				} />
				<Button
					onPress={this.gotoDetail}
					title="Go to details"
				/>
			</View>
		);
	}
}