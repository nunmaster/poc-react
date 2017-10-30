import React, { Component } from "react";

import { View, Text, Button, FlatList } from "react-native";

import { ListItem } from "native-base";

export default class Home extends Component {

	static navigationOptions = {
		title: "Home"
	};

	goTo(item){
		const { navigation } = this.props;
		navigation.navigate(item.route);
	}

	render() {

		const menuData = [
			{key: 'Button', route: 'button'},
			{key: 'Image', route: 'image'}
		];		
		return (
			<View>
				<FlatList data={menuData} renderItem={
					({item})=> 
					<ListItem onPress={()=>this.goTo(item)} style={{
					}}><Text>{item.key}</Text></ListItem>
				} />
			</View>
		);
	}
}