import { auth } from 'firebase';
import * as firebase from 'firebase';
import { app } from './init-app';

const googleProvider = new auth.GoogleAuthProvider();
googleProvider.addScope('https://www.googleapis.com/auth/userinfo.email');

const twitterProvider = new auth.TwitterAuthProvider();

export function signInWithGoogle() {
    return app.auth().signInWithPopup(googleProvider);
}

export function signInWithTwitter() {
    return app.auth().signInWithPopup(twitterProvider);
}

export function signInAnonymously() {
    return app.auth().signInAnonymously();
}

export function signOut() {
    return app.auth().signOut();
}

export const subscribeToAuthChange = (
    callback: (user?: firebase.User) => void,
) => {
    app.auth().onAuthStateChanged(
        (user: firebase.User | null) => {
            callback(user || undefined);
        },
        (error: firebase.auth.Error) => {
            callback(undefined);
        },
    );
};
