import React, { FC, FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '~/components/common/layout/Layout';

import { routes } from './routes';

type RouterType = {
    path: string;
    element: FunctionComponent;
};

export const Router: FC = () => {
    const jwtToken = '';
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {!jwtToken
                    ? routes.map((e: RouterType, index) => (
                          <Route key={index} path={e.path} element={<e.element />} />
                      ))
                    : ''}
            </Route>
        </Routes>
    );
};
