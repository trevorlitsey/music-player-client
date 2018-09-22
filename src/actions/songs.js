import { dbRef, storageRef } from '../firebase';
import { formatFilename } from './helpers';

export const uploadSong = (file, userId) => dispatch => {
  const fileRef = storageRef.child(`/${userId}/${formatFilename(file.name)}`);

  const uploadTask = fileRef.put(file);

  uploadTask.on('state_changed', handleProgress, handleFailure, handleSuccess);

  // -------
  function handleProgress(snapshot) {
    const uploadProgress =
      (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    dispatch({ type: 'UPDATE_UPLOAD_PROGRESS', uploadProgress });
  }

  function handleFailure(error) {
    dispatch({ type: 'ERROR', error });
  }

  function handleSuccess() {
    uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
      const name = file.name.split('.')[0];
      dbRef
        .child(`/${userId}`)
        .push()
        .set({
          name,
          nameSearch: name.toLowerCase(),
          downloadURL,
          createdAt: new Date(),
        });
      dispatch({ type: 'UPDATE_UPLOAD_PROGRESS', uploadProgress: 0 });
    });
  }
};

export const updateSong = (songId, { name, artist, file }) => dispatch => {
  // TODO
  return {
    type: 'UPDATE_SONG',
    name,
    nameSearch: name.toLowerCase(),
    artist,
  };
};

export const deleteSong = songId => dispatch => {
  // TODO
  return {
    type: 'DELETE_SONG',
    songId,
  };
};

export const fetchRecentUploads = userId => dispatch => {
  if (!userId) return;
  dbRef.child(`/${userId}`).on('value', snapshot => {
    dispatch({ type: 'FETCH_SONGS', songs: snapshot.val() });
  });
};

export const fetchAllSongs = userId => dispatch => {
  if (!userId) return;
  dbRef
    .child(`/${userId}`)
    .orderByChild('artist')
    .on('value', snapshot => {
      dispatch({ type: 'FETCH_SONGS', songs: snapshot.val() });
    });
};
