import { auth, GoogleAuthProvider } from '../firebase';

export const signIn = () => dispatch => {
  auth
    .signInWithPopup(GoogleAuthProvider)
    .then(result => {
      // hooray
    })
    .catch(error => {
      dispatch({ type: 'ERROR', error });
    });
};

export const signOut = () => dispatch => {
  auth
    .signOut()
    .then(() => {
      // hooray
    })
    .catch(error => {
      dispatch({ type: 'ERROR', error });
    });
};

export const getCurrentUser = () => dispatch => {
  auth.onAuthStateChanged(user => {
    dispatch({ type: 'CURRENT_USER', user });
  });
};
