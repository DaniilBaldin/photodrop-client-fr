import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '~/components/common/layout/Layout';

import { routes, protectedRoutes } from './routes';

type RouterType = {
    path: string;
    element: () => JSX.Element;
};

export const Router: FC = () => {
    const jwtToken = 'token';
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {!jwtToken
                    ? routes.map((route: RouterType, index) => (
                          <Route key={index} path={route.path} element={<route.element />} />
                      ))
                    : protectedRoutes.map((route: RouterType, index) => (
                          <Route key={index} path={route.path} element={<route.element />} />
                      ))}
            </Route>
        </Routes>
    );
};
