import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { pages } from './pages';

export function Sidebar() {
    return (
        <Fragment>
            {pages.map(page => (
                <NavLink
                    key={page.name}
                    to={page.path}
                    style={{ display: 'block' }}
                >
                    {page.title}
                </NavLink>
            ))}
        </Fragment>
    );
}
