import firebase from 'firebase/app';
import { computed, observable, runInAction } from 'mobx';
import {
    signInWithGoogle,
    signInWithTwitter,
    signOut,
    subscribeToAuthChange,
} from '../core/firebase/auth';

export class AuthStore {
    @computed
    public get isSignedIn() {
        return !!this.user;
    }
    @observable public isReady = false;
    @observable public user?: firebase.User;

    constructor() {
        this.isReady = false;
        subscribeToAuthChange(user => {
            runInAction(() => {
                this.user = user;
                this.isReady = true;
            });
        });
    }

    public signInWithTwitter = async () => {
        try {
            await signInWithTwitter();
        } catch (e) {
            console.log(e);
        }
    };

    public signInWithGoogle = async () => {
        try {
            await signInWithGoogle();
        } catch (e) {
            console.log(e);
        }
    };

    public async signOut() {
        try {
            await signOut();
        } catch (e) {
            // Ignore
        }
    }
}
