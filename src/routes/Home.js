import React from 'react';
import { gql, graphql } from 'react-apollo';

const Home = ({ data: { allSongs = [] } }) => (
	<div>
		<h1>These are some songs</h1>
		{allSongs.map(s => <h1 key={s.id}>{s.name}</h1>)}
	</div>
);

const allSongsQuery = gql`
	{
		allSongs {
			id
			name
		}
	}
`;

export default graphql(allSongsQuery)(Home);
