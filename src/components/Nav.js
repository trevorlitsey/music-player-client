import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Segment } from 'semantic-ui-react';

import { signIn, signOut } from '../actions';

class Nav extends Component {
  render() {
    const { user, pathname, signIn, signOut } = this.props;

    return (
      <Segment inverted style={{ borderRadius: 0 }}>
        <Menu inverted pointing secondary>
          <Menu.Item
            as={Link}
            to="/"
            name="all songs"
            active={pathname === '/'}
            link
          />
          <Menu.Item
            as={Link}
            to="/upload"
            name="upload"
            active={pathname === '/upload'}
          />
          <Menu.Item
            as={Link}
            to="/account"
            name="account"
            active={pathname === '/account'}
          />
          <Menu.Menu position="right">
            {user ? (
              <Menu.Item as={Link} to="/" onClick={signOut}>
                Sign Out
              </Menu.Item>
            ) : (
              <Menu.Item as={Link} to="/" onClick={signIn}>
                Sign In
              </Menu.Item>
            )}
          </Menu.Menu>
        </Menu>
      </Segment>
    );
  }
}

const mapStateToProps = ({ auth: { user } }) => {
  return { user };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(Nav);
