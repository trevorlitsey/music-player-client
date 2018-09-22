import React from 'react';
import { Container, Loader } from 'semantic-ui-react';
import { getCurrentUser } from '../actions';
import { connect } from 'react-redux';

import Nav from './Nav';
import SignIn from './SignIn';

class Layout extends React.Component {
  componentWillMount = () => {
    this.props.getCurrentUser();
  };

  render() {
    const { user, loading, children, pathname } = this.props;

    if (loading) {
      return (
        <div>
          <Nav pathname={pathname} />
          <Container style={{ margin: 20, padding: 20 }}>
            <Loader active inline="centered" />
          </Container>
        </div>
      );
    }

    return (
      <div>
        <Nav pathname={pathname} />
        <Container style={{ margin: 20, padding: 20 }}>
          {user ? children : <SignIn />}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ auth: { user, loading } }) => {
  return { user, loading };
};

export default connect(
  mapStateToProps,
  { getCurrentUser }
)(Layout);
