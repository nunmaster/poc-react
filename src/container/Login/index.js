import React from 'react';
import color from 'color';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Input,
  InputGroup,
  Button,
  Form,
  Label,
  Text,
  View
} from 'native-base';
import * as commonActions from '~/store/actions/common';
import * as authActions from '~/store/actions/auth';
import * as commonSelectors from '~/store/selectors/common';
import material from '~/theme/variables/material';

@connect(
  state => ({
    loginRequest: commonSelectors.getRequest(state)
  }),
  {
    ...commonActions,
    ...authActions
  }
)
class Login extends React.PureComponent {
  render() {
    return (
      <Container>
          
            <Form style={{
            alignSelf: 'center',
            justifyContent: 'center',
            width: '80%',
            height: '100%',
          }}>
              <InputGroup>
                <Label>Username</Label>
                <Input placeholder="Enter your username" />
              </InputGroup>
              <InputGroup>
                <Label>Password</Label>
                <Input placeholder="password" secureTextEntry />
              </InputGroup>
              <Button
                onPress={() => this.props.login()}
                style={{ marginTop: 10, alignSelf: 'center' }}
              >
                <Text>Login</Text>
              </Button>
            </Form>
          
        
      </Container>
    );
  }
}

export default Login;