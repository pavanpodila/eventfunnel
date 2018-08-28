import { initializeApp } from 'firebase';

const config = {
    apiKey: 'AIzaSyA7Xp5E-NXkfiZiZOUifTEl-eSu_-sXNk0',
    authDomain: 'eventfunnel.firebaseapp.com',
    databaseURL: 'https://eventfunnel.firebaseio.com',
    messagingSenderId: '646136762676',
    projectId: 'eventfunnel',
    storageBucket: 'eventfunnel.appspot.com',
};

export const app = initializeApp(config);
