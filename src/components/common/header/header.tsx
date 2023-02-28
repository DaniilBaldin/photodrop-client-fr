import React, { FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {
    Header,
    HeaderMain,
    Image,
    SettingsButton,
    BackButton,
    HeaderAlbum,
    HeaderMainAlbum,
    LocationAndDate,
    Title,
    BlackText,
    PurpleText,
    UnlockButton,
    ButtonText,
    DateContainer,
} from './headerStyles';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { PaymentModal } from '../modal/payment/PaymentModal';

type Props = {
    backArrow?: boolean;
};

// TODO: Header unlock button hidden if album unlocked

export const HeaderComponent: FC<Props> = () => {
    const jwtToken = 'token';
    const navigate = useNavigate();
    const location = useLocation();

    const [open, setOpen] = useState<boolean>(false);

    const user = {
        person_id: 311,
        phone_number: '+380672658690',
        selfie_image:
            'https://photodrop-s3-bucket.s3.amazonaws.com/upload/e435ea74-c28e-41de-83cc-a12eee31d1eb.jpg',
    };

    if (location.pathname.includes('album')) {
        return (
            <HeaderAlbum>
                <HeaderMainAlbum>
                    <BackButton
                        type="button"
                        onClick={() => {
                            navigate(-1);
                        }}
                        hidden={location.pathname === '/'}
                    >
                        <ArrowBackIosIcon />
                    </BackButton>
                    <LocationAndDate>
                        <Title>Album 1</Title>
                        <DateContainer>
                            <BlackText>{new Date().toDateString()}</BlackText>•{' '}
                            <PurpleText>2 photos</PurpleText>
                        </DateContainer>
                    </LocationAndDate>
                    <UnlockButton
                        onClick={() => {
                            setOpen(true);
                        }}
                    >
                        <ButtonText>Unlock your photos</ButtonText>
                    </UnlockButton>
                    <PaymentModal
                        onClose={() => {
                            setOpen(false);
                        }}
                        show={open}
                    ></PaymentModal>
                </HeaderMainAlbum>
            </HeaderAlbum>
        );
    }
    // TODO: link to user selfie image to settings button props
    return (
        <>
            {!jwtToken ? (
                <Header hidden={location.pathname.includes('album')}>
                    <HeaderMain>
                        <Image src="/logo.svg" alt="Logo" />
                    </HeaderMain>
                </Header>
            ) : (
                <Header hidden={location.pathname.includes('album')}>
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
