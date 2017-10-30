import React, { Component } from "react";

import { Button, Container, View, Text, Icon } from "native-base";

import List from "../../components/List";

export default class Home extends Component {
  render() {
    const { navigation } = this.props;
    const data = [{ key: "a" }, { key: "b" }];
    return (
      <Container
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Text>Home Screen</Text>
        <List data={data} />
        <Button
          style={{ alignSelf: "center" }}
          onPress={() => navigation.navigate("detail")}
        >
          <Icon name="md-map" />
          <Text style={{ color: "#fff" }}>This is indeed a button</Text>
        </Button>
      </Container>
    );
  }
}