export default (state = {}, action) => {
	switch (action.type) {
		case 'UPDATE_UPLOAD_PROGRESS':
			return {
				...state,
				uploadProgress: Math.round(action.uploadProgress),
			};
		case 'FETCH_SONGS':
			return {
				...state,
				loading: false,
				songs: action.songs,
			};
		default:
			return state;
	}
};
