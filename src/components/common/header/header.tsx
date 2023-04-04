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
import { tokenSelector } from '~/store/selectors/tokenSelector';
import { Selector } from '~/store/hooks/hooks';
import { userSelector } from '~/store/selectors/userSelector';

type Props = {
    backArrow?: boolean;
};

// TODO: Header unlock button hidden if album unlocked

export const HeaderComponent: FC<Props> = () => {
    const jwtToken = Selector(tokenSelector);

    const navigate = useNavigate();
    const location = useLocation();

    const user = Selector(userSelector);

    const [open, setOpen] = useState<boolean>(false);

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
                            selfie={user?.selfie as string}
                        ></SettingsButton>
                        <BackButton
                            type="button"
                            onClick={() => {
                                if (location.pathname === '/settings') {
                                    navigate('/');
                                } else {
                                    navigate(-1);
                                }
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
