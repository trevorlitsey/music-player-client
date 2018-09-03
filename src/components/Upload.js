import React from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { format } from 'date-fns';
import { compose, gql, graphql } from 'react-apollo';
import { Segment } from 'semantic-ui-react';
import { storage } from '../firebase';

import './Upload.css';

class Upload extends React.Component {
	state = {
		file: null,
	};

	formatFilename = filename => {
		const date = format(new Date(), 'YYYYMMDD');
		const randomString = Math.random()
			.toString(36)
			.substring(2, 7);
		const cleanFileName = filename.toLowerCase().replace(/[^a-z0-9]/g, '-');
		const newFilename = `images/${date}-${randomString}-${cleanFileName}`;
		return newFilename.substring(0, 60);
	};

	onDrop = async ([file]) => {
		if (!file) return;

		const fileRef = storage.ref().child(this.formatFilename(file.name));

		fileRef.put(file).then(function(snapshot) {
			console.log('Uploaded a blob or file!');
			console.log(snapshot);
		});
	};

	render() {
		return (
			<div className="upload--container">
				<Segment>
					<Dropzone
						// accept="audio/*"
						onDrop={this.onDrop}
						style={{ width: '100%' }}
						activeClassName="is-active"
						rejectClassName="is-invalid"
					>
						<svg
							className="upload--icon"
							enableBackground="new 0 0 486.3 486.3"
							viewBox="0 0 486.3 486.3"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="m395.5 135.8c-5.2-30.9-20.5-59.1-43.9-80.5-26-23.8-59.8-36.9-95-36.9-27.2 0-53.7 7.8-76.4 22.5-18.9 12.2-34.6 28.7-45.7 48.1-4.8-.9-9.8-1.4-14.8-1.4-42.5 0-77.1 34.6-77.1 77.1 0 5.5.6 10.8 1.6 16-27.5 20-44.2 52.2-44.2 86.5 0 27.7 10.3 54.6 29.1 75.9 19.3 21.8 44.8 34.7 72 36.2h.8 86c7.5 0 13.5-6 13.5-13.5s-6-13.5-13.5-13.5h-85.6c-40.9-2.5-75.3-41.4-75.3-85.2 0-28.3 15.2-54.7 39.7-69 5.7-3.3 8.1-10.2 5.9-16.4-2-5.4-3-11.1-3-17.2 0-27.6 22.5-50.1 50.1-50.1 5.9 0 11.7 1 17.1 3 6.6 2.4 13.9-.6 16.9-6.9 18.7-39.7 59.1-65.3 103-65.3 59 0 107.7 44.2 113.3 102.8.6 6.1 5.2 11 11.2 12 44.5 7.6 78.1 48.7 78.1 95.6 0 49.7-39.1 92.9-87.3 96.6h-73.7c-7.5 0-13.5 6-13.5 13.5s6 13.5 13.5 13.5h74.2 1c30.5-2.2 59-16.2 80.2-39.6 21.1-23.2 32.6-53 32.6-84-.1-56.1-38.4-106-90.8-119.8z" />
							<path d="m324.2 280c5.3-5.3 5.3-13.8 0-19.1l-71.5-71.5c-2.5-2.5-6-4-9.5-4s-7 1.4-9.5 4l-71.5 71.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4l48.5-48.5v222.9c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-222.9l48.5 48.5c5.2 5.3 13.7 5.3 19 0z" />
						</svg>
						<p>Drag and drop audio files to upload</p>
					</Dropzone>
				</Segment>
			</div>
		);
	}
}

const CreateChampionMutation = gql`
	mutation($name: String!, $pictureUrl: String!) {
		createChampion(name: $name, pictureUrl: $pictureUrl) {
			id
		}
	}
`;

const s3SignMutation = gql`
	mutation($filename: String!, $filetype: String!) {
		signS3(filename: $filename, filetype: $filetype) {
			url
			signedRequest
		}
	}
`;

export default compose(
	graphql(CreateChampionMutation, { name: 'createChampion' }),
	graphql(s3SignMutation, { name: 's3Sign' })
)(Upload);
