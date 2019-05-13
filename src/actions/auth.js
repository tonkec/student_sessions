import { firebase, googleAuthProvider } from "../firebase/firebase";

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

export const login = (uid, email) => ({
  type: "LOGIN",
  uid,
  email
});

export const logout = () => ({
  type: "LOGOUT"
});

export const loginAsGuest = id => ({
  type: "LOGIN_AS_GUEST",
  id
});

export const logoutAsGuest = () => ({
  type: "LOGOUT_AS_GUEST"
});
