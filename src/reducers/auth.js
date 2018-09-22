export default (state = {}, action) => {
  switch (action.type) {
    case 'CURRENT_USER':
      return { ...state, user: action.user, loading: false };
    default:
      return state;
  }
};
