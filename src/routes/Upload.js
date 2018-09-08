import React from 'react';
import { Header } from 'semantic-ui-react';

import Layout from '../components/Layout';
import SongList from '../components/SongList';
import Upload from '../components/Upload';

export default () => (
	<Layout>
		<Header>Upload Files</Header>
		<Upload />
		<Header>Recent Uploads</Header>
		<SongList />
	</Layout>
);
