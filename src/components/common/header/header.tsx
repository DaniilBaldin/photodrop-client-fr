import React, { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Header, HeaderMain, Image, SettingsButton, BackButton } from './headerStyles';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

type Props = {
    backArrow?: boolean;
};

export const HeaderComponent: FC<Props> = () => {
    const jwtToken = 'token';
    const navigate = useNavigate();
    const location = useLocation();

    // TODO: link to user selfie image to settings button props
    return (
        <>
            {!jwtToken ? (
                <Header>
                    <HeaderMain>
                        <Image src="/logo.svg" alt="Logo" />
                    </HeaderMain>
                </Header>
            ) : (
                <Header>
                    <HeaderMain>
                        <Image src="/logo.svg" alt="Logo" />
                        <SettingsButton
                            type="button"
                            onClick={() => {
                                navigate('settings');
                            }}
                            hidden={location.pathname === '/settings'}
                            path={location.pathname}
                        ></SettingsButton>
                        <BackButton
                            type="button"
                            onClick={() => {
                                navigate(-1);
                            }}
                            hidden={location.pathname === '/'}
                        >
                            <ArrowBackIosIcon />
                        </BackButton>
                    </HeaderMain>
                </Header>
            )}
        </>
    );
};
