import { dbRef, storageRef } from '../firebase';
import { formatFilename } from './helpers';

export const uploadSong = file => dispatch => {
	const fileRef = storageRef.child(formatFilename(file.name));

	const uploadTask = fileRef.put(file);

	uploadTask.on('state_changed', handleProgress, handleFailure, handleSuccess);

	// -------
	function handleProgress(snapshot) {
		const uploadProgress =
			(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
		dispatch({ type: 'UPDATE_UPLOAD_PROGRESS', uploadProgress });
	}

	function handleFailure() {
		console.log('DOWNLOAD FAILED!');
	}

	function handleSuccess() {
		uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
			dbRef.push().set({
				name: file.name,
				downloadURL,
				createdAt: new Date(),
			});
			dispatch({ type: 'UPDATE_UPLOAD_PROGRESS', uploadProgress: 0 });
		});
	}
};

export function updateSong(songId, { name, artist, file }) {
	return {
		type: 'UPDATE_SONG',
		name,
		artist,
		file,
	};
}

export function deleteSong(songId) {
	return {
		type: 'DELETE_SONG',
		songId,
	};
}

export const fetchSongs = () => dispatch => {
	dbRef.on('value', snapshot => {
		dispatch({ type: 'FETCH_SONGS', songs: snapshot.val() });
	});
};
