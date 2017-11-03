import React from 'react';
import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Container, Content } from 'native-base';
import * as commonActions from '../../store/actions/common';
import * as authActions from '../../store/actions/auth';
import * as authSelectors from '../../store/selectors/auth';
import Mixpanel from 'react-native-mixpanel';
import Permissions from 'react-native-permissions';
import { Platform, Text, Linking } from 'react-native';
  

@connect(
  state => ({
    ...authSelectors.getUser(state)
  }),
  {
    ...commonActions,
    ...authActions
  }
)
class Home extends React.PureComponent {

  componentDidMount() {
    if (Platform.OS === 'android') {
      Linking.getInitialURL().then(url => {
        this.handleOpenURL;
      });
    } else {
      Linking.addEventListener('url', this.handleOpenURL);
    }
  }


  componentWillMount() {
    Mixpanel.sharedInstanceWithToken('6fa5fac674280b9c3369328c7551d0a3');
    Mixpanel.track('App Loaded');

    Linking.removeEventListener('url', this.handleOpenURL);

    Permissions.check('location')
      .then(response => {
        //response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
        this.setState({ locationPermission: response });
        if (response === 'authorized') this.getLocation();
      });
  }
  getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('Position', position);
      },
      (error) => {
      },
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
    );
  }

  handleOpenURL = (event) => {
    alert("open from deep link")
  }


  render() {
    return (
      <Container>
        <Content>
          <MapView
            style={{
              width: null,
              height: 300,
              flex: 1
            }}
            provider={PROVIDER_GOOGLE}
          />
        </Content>
      </Container>
    );
  }
}

export default Home;
