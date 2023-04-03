import React, { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '~/components/common/layout/Layout';

import { Selector } from '~/store/hooks/hooks';
import { tokenSelector } from '~/store/selectors/tokenSelector';

import { routes, protectedRoutes } from './routes';

type RouterType = {
    path: string;
    element: FunctionComponent;
};

export const Router = () => {
    const state = Selector(tokenSelector);
    const tokenLast = state.slice(-1);
    const jwtToken = tokenLast[0].token;
    console.log(jwtToken);

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
