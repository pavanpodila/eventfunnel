import { initializeApp } from 'firebase';

const config = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
};

export const app = initializeApp(config);
