import { Login } from '~/components/pages/login/Login';
import { NotFound } from '~/components/pages/notFound/notFound';

export const routes = [
  {
    path: '/',
    element: Login,
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
