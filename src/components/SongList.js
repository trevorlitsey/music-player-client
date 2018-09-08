import React from 'react';
import { List } from 'semantic-ui-react';

const Song = ({ name, artist }) => (
	<List.Item>
		<List.Icon name="music" size="large" verticalAlign="middle" />
		<List.Content>
			<List.Header as="a">{name}</List.Header>
			<List.Description as="p">{artist}</List.Description>
		</List.Content>
	</List.Item>
);

const ListExampleDivided = ({ songs }) =>
	songs && songs.length ? (
		<List divided relaxed>
			{songs.map(Song)}
		</List>
	) : (
		<i>none yet</i>
	);

export default ListExampleDivided;
