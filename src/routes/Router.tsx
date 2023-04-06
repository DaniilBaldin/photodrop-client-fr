import React, { FunctionComponent, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '~/components/common/layout/Layout';
import { fetchHook } from '~/components/hooks/fetchHook';

import { Dispatch, Selector } from '~/store/hooks/hooks';
import { addUser } from '~/store/reducers/userReducer';
import { tokenSelector } from '~/store/selectors/tokenSelector';

import { routes, protectedRoutes } from './routes';

type RouterType = {
    path: string;
    element: FunctionComponent;
};

type Data = {
    user: {
        id: number;
        phoneNumber: string;
        verified: boolean;
        name: string;
        ownedAlbums: string[];
        selfie: string;
    };
    success: boolean;
};

export const Router = () => {
    const dispatch = Dispatch();

    const jwtToken = Selector(tokenSelector);

    const method = 'GET';
    const slug = 'user/profile';
    const header = {
        Authorization: `Bearer ${jwtToken}`,
        'ngrok-skip-browser-warning': '69420',
    };

    const { data } = fetchHook<Data>(method, slug, undefined, header);

    useEffect(() => {
        if (data) {
            const user = data?.user;
            dispatch(addUser(user));
        }
    }, [data]);

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
