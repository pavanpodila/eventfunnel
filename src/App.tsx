import { Provider } from 'mobx-react';
import React from 'react';
import { AuthStore } from './auth';
import { AuthPanel } from './auth/auth-panel';

const store = new AuthStore();

class App extends React.Component {
    public render() {
        return (
            <Provider store={store}>
                <AuthPanel />
            </Provider>
        );
    }
}

export default App;
