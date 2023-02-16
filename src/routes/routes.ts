import { Login } from '~/components/pages/login/Login';
import { NotFound } from '~/components/pages/notFound/notFound';
import { Verify } from '~/components/pages/verify/Verify';
import { Selfie } from '~/components/pages/selfie/Selfie';

export const routes = [
    {
        path: '/',
        element: Login,
    },
    {
        path: '/verify',
        element: Verify,
    },
    {
        path: '/selfie',
        element: Selfie,
    },
    {
        path: '*',
        element: NotFound,
    },
];

// export const protectedRoutes = [
//   {
//     path: '/',
//     element: Albums,
//   },
//   {
//     path: '/album/:id',
//     element: Album,
//   },
//   {
//     path: '*',
//     element: NotFound,
//   },
// ];
