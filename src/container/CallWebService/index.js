import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  View,
} from 'react-native';

export default class CallWebService extends Component {
  state = {
    loading: false,
    response: '',
  }

  get = () => {
    this.setState({ loading: true });
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          response: JSON.stringify(responseJson)
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          response: 'error'
        });
        console.error(error);
      });
  }
  post = () => {
    this.setState({ loading: true });

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        test: '1234',
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          response: JSON.stringify(responseJson)
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          response: 'error'
        });
        console.error(error);
      });
  }
  put = () => {
    this.setState({ loading: true });

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        test: '1234',
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          response: JSON.stringify(responseJson)
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          response: 'error'
        });
        console.error(error);
      });
  }
  delete = () => {
    this.setState({ loading: true });

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        test: '1234'
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          response: JSON.stringify(responseJson)
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          response: 'error'
        });
        console.error(error);
      });
  }

  render() {
    return (
      <ScrollView>
        {
          this.state.loading ?
            <ActivityIndicator />
            :
            <Text numberOfLines={10}>{this.state.response}</Text>
        }

        <View>
          <TouchableOpacity
            onPress={this.get}
          >
            <Text>GET</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={this.post}
          >
            <Text>POST</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={this.put}
          >
            <Text>PUT</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={this.delete}
          >
            <Text>DELETE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
