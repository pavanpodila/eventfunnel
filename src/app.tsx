import '../node_modules/antd/dist/antd.css';

import { Provider } from 'mobx-react';
import React from 'react';
import { AuthStore } from './auth/auth.store';
import Layout from 'antd/es/layout/layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Sidebar } from './sidebar';
import { pages } from './pages';

const store = new AuthStore();

class App extends React.Component {
    public render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Layout style={{ height: '100vh' }}>
                        <Layout.Sider>
                            <h3 style={{ color: 'white', textAlign: 'center' }}>
                                Event Funnel
                            </h3>

                            <Sidebar />
                        </Layout.Sider>

                        <Layout.Content>
                            <Switch>
                                <Route
                                    path={'/'}
                                    exact={true}
                                    component={Home}
                                />
                                {pages.map(page => (
                                    <Route
                                        key={page.name}
                                        path={page.path}
                                        component={page.component}
                                    />
                                ))}
                            </Switch>
                        </Layout.Content>
                    </Layout>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;

function Home() {
    return <h1>Event Funnel</h1>;
}
