import React from 'react';
import { Container, Header } from 'semantic-ui-react';

import Layout from '../components/Layout';
import SongList from '../components/SongList';
import Upload from '../components/Upload';

export default () => (
	<Layout>
		<Container style={{ margin: 20, padding: 20 }}>
			<Header>Recent Uploads</Header>
			<SongList />
			<Header>Upload Files</Header>
			<Upload />
		</Container>
	</Layout>
);
