import '../node_modules/antd/dist/antd.css';

import { Provider } from 'mobx-react';
import React from 'react';
import { AuthStore } from './auth';
import { AuthPanel } from './auth/auth-panel';
import Layout from 'antd/es/layout/layout';

const store = new AuthStore();

class App extends React.Component {
    public render() {
        return (
            <Provider store={store}>
                <Layout style={{ height: '100vh' }}>
                    <Layout.Sider style={{ color: 'white' }}>
                        header
                    </Layout.Sider>

                    <Layout.Content>
                        <AuthPanel />
                    </Layout.Content>
                </Layout>
            </Provider>
        );
    }
}

export default App;
