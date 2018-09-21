import React from 'react';
import { List } from 'semantic-ui-react';
import { string } from 'prop-types';

import EditSongForm from './EditSongForm';

const Song = ({ name, artist }) => (
  <List.Item>
    <List.Icon name="music" size="large" verticalAlign="middle" />
    <List.Content>
      <EditSongForm
        name={name}
        artist={artist}
        trigger={<List.Header as="a">{name}</List.Header>}
      />
      <List.Description as="p">{artist || <i>unkown</i>}</List.Description>
    </List.Content>
  </List.Item>
);

Song.propTypes = {
  id: string,
  name: string,
  artist: string,
};

export default Song;
