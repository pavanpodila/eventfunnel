import { AuthPanel } from './auth/auth-panel';
import { CreateEvent } from './event/create-event';

export const pages = [
    {
        name: 'auth',
        path: '/auth',
        title: 'Authentication',
        component: AuthPanel,
    },
    {
        name: 'create-event',
        path: '/create-event',
        title: 'Create Event',
        component: CreateEvent,
    },
];
