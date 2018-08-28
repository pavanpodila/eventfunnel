import firebase from 'firebase/app';
import { computed, observable, runInAction } from 'mobx';
import {
    signInWithGoogle,
    signInWithTwitter,
    subscribeToAuthChange,
} from '../core/firebase/auth';

export class AuthStore {
    @observable public isReady = false;
    @observable public user?: firebase.User;

    public signInWithGoogle = signInWithGoogle;
    public signInWithTwitter = signInWithTwitter;

    @computed
    public get isSignedIn() {
        return !!this.user;
    }

    constructor() {
        this.isReady = false;
        subscribeToAuthChange(user => {
            runInAction(() => {
                this.user = user;
                this.isReady = true;
            });
        });
    }
}
