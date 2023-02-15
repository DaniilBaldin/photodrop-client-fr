import { Login } from '~/components/pages/login/Login';
import { NotFound } from '~/components/pages/notFound/notFound';
import { Verify } from '~/components/pages/verify/Verify';

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
