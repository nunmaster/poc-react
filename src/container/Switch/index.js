
import React, { Component } from 'react';
import {
  Platform,
  Switch,
  Text,
  View,
  ScrollView
} from 'react-native';
class BasicSwitchExample extends React.Component {
  state = {
    trueSwitchIsOn: true,
    falseSwitchIsOn: false,
  };

  render() {
    return (
      <View>
        <Switch
          onValueChange={(value) => this.setState({ falseSwitchIsOn: value })}
          style={{ marginBottom: 10 }}
          value={this.state.falseSwitchIsOn}
        />
        <Switch
          onValueChange={(value) => this.setState({ trueSwitchIsOn: value })}
          value={this.state.trueSwitchIsOn}
        />
      </View>
    );
  }
}

class DisabledSwitchExample extends React.Component {
  render() {
    return (
      <View>
        <Switch
          disabled
          style={{ marginBottom: 10 }}
          value
        />
        <Switch
          disabled
          value={false}
        />
      </View>
    );
  }
}

class ColorSwitchExample extends React.Component {
  state = {
    colorTrueSwitchIsOn: true,
    colorFalseSwitchIsOn: false,
  };

  render() {
    return (
      <View>
        <Switch
          onValueChange={(value) => this.setState({ colorFalseSwitchIsOn: value })}
          onTintColor="#00ff00"
          style={{ marginBottom: 10 }}
          thumbTintColor="#0000ff"
          tintColor="#ff0000"
          value={this.state.colorFalseSwitchIsOn}
        />
        <Switch
          onValueChange={(value) => this.setState({ colorTrueSwitchIsOn: value })}
          onTintColor="#00ff00"
          thumbTintColor="#0000ff"
          tintColor="#ff0000"
          value={this.state.colorTrueSwitchIsOn}
        />
      </View>
    );
  }
}

class EventSwitchExample extends React.Component {
  state = {
    eventSwitchIsOn: false,
    eventSwitchRegressionIsOn: true,
  };

  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <View>
          <Switch
            onValueChange={(value) => this.setState({ eventSwitchIsOn: value })}
            style={{ marginBottom: 10 }}
            value={this.state.eventSwitchIsOn}
          />
          <Switch
            onValueChange={(value) => this.setState({ eventSwitchIsOn: value })}
            style={{ marginBottom: 10 }}
            value={this.state.eventSwitchIsOn}
          />
          <Text>{this.state.eventSwitchIsOn ? 'On' : 'Off'}</Text>
        </View>
        <View>
          <Switch
            onValueChange={(value) => this.setState({ eventSwitchRegressionIsOn: value })}
            style={{ marginBottom: 10 }}
            value={this.state.eventSwitchRegressionIsOn}
          />
          <Switch
            onValueChange={(value) => this.setState({ eventSwitchRegressionIsOn: value })}
            style={{ marginBottom: 10 }}
            value={this.state.eventSwitchRegressionIsOn}
          />
          <Text>{this.state.eventSwitchRegressionIsOn ? 'On' : 'Off'}</Text>
        </View>
      </View>
    );
  }
}

export default class Example extends Component {
  render() {
    return (
      <ScrollView style={{ padding: 20 }}>
        <Text>Switches can be set to true or false</Text>
        <BasicSwitchExample />
        <Text>Switches can be disabled</Text>
        <DisabledSwitchExample />
        <Text>Change events can be detected</Text>
        <EventSwitchExample />
        <Text>Switches are controlled components</Text>
        <Switch />

        {Platform.OS === 'ios' ? <Text>Custom colors can be provided</Text> : null}
        {Platform.OS === 'ios' ? <ColorSwitchExample /> : null}

      </ScrollView>

    );
  }
}

