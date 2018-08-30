import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { Fragment } from 'react';
import { AuthStore } from './index';
import Button from 'antd/es/button/button';
import { Icon } from 'antd';

interface Props {
    store?: AuthStore;
}
@inject('store')
@observer
export class AuthPanel extends React.Component<Props> {
    public render() {
        const { store } = this.props;
        const { isSignedIn, isReady, user } = store!;

        return (
            <Fragment>
                {isReady ? (
                    <div>
                        {isSignedIn ? (
                            <div>
                                {`Signed In as ${user!.displayName}`}
                                <Button onClick={store!.signOut}>
                                    Sign Out
                                </Button>
                            </div>
                        ) : (
                            <Fragment>
                                <Button
                                    onClick={store!.signInWithGoogle}
                                    style={{
                                        backgroundColor: '#e20000',
                                        color: 'white',
                                    }}
                                >
                                    <Icon type={'google'} />
                                    Sign In with Google
                                </Button>
                                <Button
                                    onClick={store!.signInWithTwitter}
                                    style={{
                                        backgroundColor: '#4ba1e2',
                                        color: 'white',
                                    }}
                                >
                                    <Icon type={'twitter'} />
                                    Sign In with Twitter
                                </Button>
                            </Fragment>
                        )}
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
            </Fragment>
        );
    }
}
