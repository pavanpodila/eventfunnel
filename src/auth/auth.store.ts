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

    @observable
    public isReady = false;

    @observable
    public isSigningIn = false;

    @observable
    public user?: firebase.User;

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
        this.signIn(signInWithTwitter);
    };

    public signInWithGoogle = () => {
        this.signIn(signInWithGoogle);
    };

    public async signOut() {
        try {
            await signOut();
        } catch (e) {
            // Ignore
        }
    }

    private async signIn(fn: () => Promise<any>) {
        try {
            this.isSigningIn = true;
            await fn();
        } catch (e) {
            console.log(e);
        } finally {
            this.isSigningIn = false;
        }
    }
}
