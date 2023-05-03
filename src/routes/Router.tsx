import React, { FunctionComponent, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '~/components/common/layout/Layout';

import { Dispatch, Selector } from '~/store/hooks/hooks';
import { addUser, changeSelfie } from '~/store/reducers/userReducer';
import { tokenSelector } from '~/store/selectors/tokenSelector';

import { routes, protectedRoutes } from './routes';
import { getBlob } from '~/utils/getBlob';

type RouterType = {
    path: string;
    element: FunctionComponent;
};

type User = {
    id: number;
    phoneNumber: string;
    verified: boolean;
    name: string;
    ownedAlbums: string[];
    selfie: string;
};

export const Router = () => {
    const dispatch = Dispatch();

    const jwtToken = Selector(tokenSelector);

    const baseUrl = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        const getUser = async () => {
            const response = await fetch(`${baseUrl}user/profile`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${jwtToken}`,
                    'ngrok-skip-browser-warning': '69420',
                },
                body: undefined,
            });
            const data = await response.json();

            if (data) {
                const user: User = data?.user;
                user.selfie = user.selfie + '?' + new Date().getTime();
                dispatch(addUser(user));
                getBlob(user?.selfie as string).then((result: Blob | undefined) => {
                    dispatch(changeSelfie(URL.createObjectURL(result as Blob)));
                });
            }
        };
        if (jwtToken) {
            void getUser();
        }
    }, [jwtToken]);

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
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};
