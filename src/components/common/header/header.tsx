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

    const user = {
        person_id: 311,
        phone_number: '+380672658690',
        selfie_image:
            'https://photodrop-s3-bucket.s3.amazonaws.com/upload/e435ea74-c28e-41de-83cc-a12eee31d1eb.jpg',
    };

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
                            selfie={user.selfie_image}
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
