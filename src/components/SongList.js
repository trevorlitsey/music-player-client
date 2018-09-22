import React from 'react';
import { List } from 'semantic-ui-react';
import { fetchAllSongs } from '../actions';
import { connect } from 'react-redux';
import { Loader } from 'semantic-ui-react';

import Song from './Song';

class SongList extends React.Component {
  componentWillMount() {
    this.props.fetchAllSongs(this.props.userId);
  }

  render() {
    const { songs, loading } = this.props;

    if (loading) return <Loader active inline="centered" />;

    return songs && Object.keys(songs).length ? (
      <List>
        {Object.entries(songs).map(([key, values]) => (
          <Song id={key} key={key} {...values} />
        ))}
      </List>
    ) : (
      <i>none yet</i>
    );
  }
}

const mapStateToProps = ({ data: { songs, loading }, auth: { user } }) => {
  return { songs, loading, userId: user.uid };
};

export default connect(
  mapStateToProps,
  { fetchAllSongs }
)(SongList);
