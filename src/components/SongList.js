import React from 'react';
import { List } from 'semantic-ui-react';
import { fetchSongs } from '../actions';
import { connect } from 'react-redux';
import { Loader } from 'semantic-ui-react';

const Song = ({ name, artist }) => (
	<List.Item>
		<List.Icon name="music" size="large" verticalAlign="middle" />
		<List.Content>
			<List.Header as="a">{name}</List.Header>
			<List.Description as="p">{artist}</List.Description>
		</List.Content>
	</List.Item>
);

class SongList extends React.Component {
	componentWillMount() {
		this.props.fetchSongs();
	}

	render() {
		const { songs, loading } = this.props;

		if (loading) return <Loader active inline="centered" />;

		return songs && Object.keys(songs).length ? (
			<List divided relaxed>
				{Object.entries(songs).map(([key, values]) => (
					<Song key={key} {...values} />
				))}
			</List>
		) : (
			<i>none yet</i>
		);
	}
}

const mapStateToProps = ({ data: { songs, loading } }) => {
	return { songs, loading };
};

export default connect(
	mapStateToProps,
	{ fetchSongs }
)(SongList);
