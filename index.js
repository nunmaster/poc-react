import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import App from './src/App';
import Preload from './src/container/Preload';
import { configStore } from './src/store';
import { resetTo } from './src/store/actions/common';
import { initRoute, authorizedRoute } from './src/constants/routes';
// import CodePush from "react-native-code-push";

class Root extends React.Component {
  state = {
    isLoading: true
  };

  componentDidMount() {    

    configStore(store => {
      if(!__DEV__){
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
