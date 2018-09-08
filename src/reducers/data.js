export default (state = {}, action) => {
	switch (action.type) {
		case 'UPDATE_UPLOAD_PROGRESS':
			return {
				...state,
				uploadProgress: action.uploadProgress,
			};
		case 'FETCH_SONGS':
			return {
				...state,
				songs: action.songs,
			};
		default:
			return state;
	}
};
