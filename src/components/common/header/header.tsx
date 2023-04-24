import React, { FC, useEffect, useState } from 'react';
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
import { oneAlbumSelector } from '~/store/selectors/oneAlbumSelector';
import { albumPhotoSelector } from '~/store/selectors/albumPhotoSelector';

type Props = {
    backArrow?: boolean;
};

export const HeaderComponent: FC<Props> = () => {
    const jwtToken = Selector(tokenSelector);

    const navigate = useNavigate();
    const location = useLocation();

    const user = Selector(userSelector);
    const album = Selector(oneAlbumSelector);
    const photos = Selector(albumPhotoSelector);

    const [selfie, setSelfie] = useState<string | null>('');

    useEffect(() => {
        if (user?.selfie.split(':')[0] !== 'blob') {
            setSelfie((user?.selfie as string) + '?_' + new Date().getTime());
        } else {
            setSelfie(user?.selfie as string);
        }
    }, [user]);

    const [open, setOpen] = useState<boolean>(false);
    const date = new Date(album?.date as string).toDateString();

    if (location.pathname.includes('album')) {
        return (
            <HeaderAlbum>
                <HeaderMainAlbum>
                    <BackButton
                        type="button"
                        onClick={() => {
                            navigate('/');
                        }}
                        hidden={location.pathname === '/'}
                    >
                        <ArrowBackIosIcon />
                    </BackButton>
                    <LocationAndDate>
                        <Title>{album?.name}</Title>
                        <DateContainer>
                            <BlackText>{date}</BlackText> •{' '}
                            <PurpleText>{photos?.length} photos</PurpleText>
                        </DateContainer>
                    </LocationAndDate>
                    <UnlockButton
                        onClick={() => {
                            setOpen(true);
                        }}
                    >
                        <ButtonText hidden={album?.owned}>Unlock your photos</ButtonText>
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
                            selfie={selfie as string}
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
                            hidden={location.pathname === '/' || location.pathname === '/success'}
                        >
                            <ArrowBackIosIcon />
                        </BackButton>
                    </HeaderMain>
                </Header>
            )}
        </>
    );
};
