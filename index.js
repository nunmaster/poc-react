import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import App from './src/App';
import Preload from './src/container/Preload';
import { configStore } from './src/store';
import { resetTo } from './src/store/actions/common';
import { initRoute, authorizedRoute } from './src/constants/routes';
import firebase from 'react-native-firebase';
import BadgeAndroid from 'react-native-android-badge';

class Root extends React.Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    firebase.messaging().requestPermissions();

    // This gets logged only when the app is open
    // Nothing happens when app is closed, no notification is shown either

    firebase.messaging().getInitialNotification()
      .then((notification) => {
        console.log('Notification which opened the app: ', notification);
        console.log('Badge: ', notification.badge);
        const BadgeAndroid = require('react-native-android-badge');
        BadgeAndroid.setBadge(10);
    });
    
    configStore(store => {
      if (!__DEV__) {
        const firstRoute = store.getState().auth.loggedIn ? authorizedRoute : initRoute;
        store.dispatch(resetTo(firstRoute));
      }
      this.store = store;
      this.setState({ isLoading: false });
    });
  }

  shouldComponentUpdate(nextProps, { isLoading }) {
    return this.state.isLoading !== isLoading;
  }

  store = null;

  render() {
    if (!this.store || this.state.isLoading) {
      return <Preload />;
    }
    return (
      <Provider store={this.store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('PocReact', () => Root);
