import React from 'react';
import { Link } from 'react-router-dom';

import { MainPage, GoBackButton } from './notFoundStyles';

export const NotFound = () => {
    return (
        <>
            <MainPage>
                <h2>Page not found!</h2>
                <Link to="/">
                    <GoBackButton>Go back</GoBackButton>
                </Link>
            </MainPage>
        </>
    );
};
