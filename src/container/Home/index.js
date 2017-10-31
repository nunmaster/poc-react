import React from 'react';
import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Container, Content } from 'native-base';
import * as commonActions from '~/store/actions/common';
import * as authActions from '~/store/actions/auth';
import * as authSelectors from '~/store/selectors/auth';

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

  componentWillMount(){
    // navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     console.log('Position', position)              
    //   },
    //   (error) => {
    //   },
    //   { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
    // )
  }

  render() {
    return (
      <Container>
        <Content>
          <MapView
            style={{
              width: null,
              height: 500,
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
