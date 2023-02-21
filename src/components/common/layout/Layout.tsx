import React from 'react';
import { Outlet } from 'react-router-dom';

import { HeaderComponent } from '~/components/common/header/header';
import { Footer } from '~/components/common/footer/Footer';

import { Container } from './layoutStyles';

export const Layout = () => {
    return (
        <Container>
            <HeaderComponent settingsButton={true} />
            <Outlet />
            <Footer />
        </Container>
    );
};
