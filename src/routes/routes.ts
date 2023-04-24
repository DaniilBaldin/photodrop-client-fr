import { Login } from '~/components/pages/login/Login';
import { Verify } from '~/components/pages/verify/Verify';
import { Selfie } from '~/components/pages/selfie/Selfie';
import { MainPage } from '~/components/pages/main/MainPage';
import { Settings } from '~/components/pages/settings/Settings';
import { TermsOfService } from '~/components/pages/terms/TermsOfService';
import { PrivacyPolicy } from '~/components/pages/privacy/PrivacyPolicy';
import { ChangeName } from '~/components/pages/settings/components/ChangeName';
import { Album } from '~/components/pages/album/Album';
import { SuccessPage } from '~/components/pages/success/SuccessPage';

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
        path: '/terms',
        element: TermsOfService,
    },
    {
        path: '/privacy',
        element: PrivacyPolicy,
    },
];

export const protectedRoutes = [
    {
        path: '/',
        element: MainPage,
    },
    {
        path: '/selfie',
        element: Selfie,
    },
    {
        path: '/album/:id',
        element: Album,
    },
    {
        path: '/settings',
        element: Settings,
    },
    {
        path: '/settings-change-name',
        element: ChangeName,
    },
    {
        path: '/terms',
        element: TermsOfService,
    },
    {
        path: '/privacy',
        element: PrivacyPolicy,
    },
    {
        path: '/success',
        element: SuccessPage,
    },
];
