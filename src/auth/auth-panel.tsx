import Button from '@material-ui/core/Button/Button';
import Typography from '@material-ui/core/Typography/Typography';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { Fragment } from 'react';
import { AuthStore } from './index';

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
                            <Typography>
                                {`Signed In as ${user!.displayName}`}
                            </Typography>
                        ) : (
                            <Button onClick={this.onSignIn}>
                                Sign In with Google
                            </Button>
                        )}
                    </div>
                ) : (
                    <Typography variant={'body1'}>Loading...</Typography>
                )}
            </Fragment>
        );
    }

    private onSignIn = () => {
        this.props.store!.signInWithGoogle();
    };
}
