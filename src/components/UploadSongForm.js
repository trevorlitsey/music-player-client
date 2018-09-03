import { gql, graphql } from 'react-apollo';
import { func } from 'prop-types';

import React, { Component } from 'react';
import { Container, Form, Button, Message } from 'semantic-ui-react';

class UploadSongForm extends Component {
	state = {
		nameError: null,
		fileError: null,
		formErrors: null,
	};

	checkName = () => {
		let nameError = false;

		if (!this.refs.name.value || !this.refs.name.value.length) {
			nameError = 'Please provide a song title';
		}

		this.setState({ nameError });
	};

	checkFile = () => {
		let fileError = false;

		const {
			validity,
			files: [file],
		} = this.refs.file;

		if (!validity.valid || !file.type.includes('audio')) {
			fileError = 'Only audio files are allowed';
		}

		this.setState({ fileError });
	};

	handleSubmit = async e => {
		console.log(e);

		const { nameError, fileError } = this.state;

		if (nameError !== false || fileError !== false) {
			return this.setState({
				formErrors: ['Please correct all form errors'],
			});
		}

		const {
			files: [file],
		} = this.refs.file;

		const input = {
			file,
			name: this.refs.name.value,
		};

		console.log(input);

		try {
			await this.props.uploadSong({
				variables: {
					input,
				},
			});
		} catch (err) {
			console.error(err);
			this.setState({ formErrors: err });
		}
	};

	render() {
		const { nameError, fileError, formErrors } = this.state;

		return (
			<Container>
				<h1>Upload</h1>
				{formErrors && formErrors.length ? (
					<Message
						error
						header="There was a problem with your submission"
						items={formErrors}
					/>
				) : null}
				<Form onSubmit={this.handleSubmit}>
					<Form.Field>
						<label ref="name" htmlFor="name">
							Song title:
						</label>
						<input
							ref="name"
							onChange={this.checkName}
							id="name"
							type="text"
							placeholder="Time of the Season"
						/>
						{!!nameError && <span className="error">{nameError}</span>}
					</Form.Field>
					<Form.Field>
						<label htmlFor="name">Song file:</label>
						<input
							onChange={this.checkFile}
							ref="file"
							type="file"
							name="file"
						/>
						{!!fileError && <span className="error">{fileError}</span>}
					</Form.Field>
					<Button type="submit">Submit</Button>
				</Form>
			</Container>
		);
	}
}

export default UploadSongForm;
