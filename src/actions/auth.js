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

export const loginWithoutGoogle = (id, email, password) => ({
  type: "LOGIN_WITHOUT_GOOGLE",
  id,
  email,
  password
});
