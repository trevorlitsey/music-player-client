import React from 'react';
import { Divider, Header, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { signIn } from '../actions';

const SignIn = ({ signIn }) => (
  <div
    style={{
      textAlign: 'center',
      marginTop: 50,
    }}
  >
    <Divider horizontal>
      <Header as="h1">BYO MUSIC</Header>
    </Divider>
    <Button
      onClick={signIn}
      style={{ marginTop: 30 }}
      basic
      color="blue"
      size="massive"
    >
      Sign In with Google
    </Button>
  </div>
);

export default connect(
  () => ({}),
  { signIn }
)(SignIn);
