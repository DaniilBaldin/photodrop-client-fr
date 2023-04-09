import React, { FC, useEffect } from 'react';

import {
    Modal,
    ModalContent,
    Header,
    Text,
    CloseButton,
    Body,
    TextPlain,
    TextBold,
    CheckoutButton,
    ButtonText,
} from './paymentStyles';

import CloseIcon from '@mui/icons-material/Close';
import { useLocation } from 'react-router-dom';
import { Selector } from '~/store/hooks/hooks';
import { tokenSelector } from '~/store/selectors/tokenSelector';
import { oneAlbumSelector } from '~/store/selectors/oneAlbumSelector';

type Props = {
    show: boolean;
    onClose: () => void;
};

export const PaymentModal: FC<Props> = (props) => {
    const id = useLocation().pathname.split('/')[2];

    const jwtToken = Selector(tokenSelector);
    const album = Selector(oneAlbumSelector);

    const baseUrl = import.meta.env.VITE_BASE_URL;

    const chackoutHandler = async () => {
        const response = await fetch(`${baseUrl}payment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwtToken}`,
                'ngrok-skip-browser-warning': '69420',
            },
            body: JSON.stringify({
                albumId: id,
            }),
        });
        const data = await response.json();
        if (data?.success) {
            localStorage.setItem('albumId', id);
            window.location.replace(data.url);
        }
    };

    const closeOnEscapeKeyDown = (e: { charCode: number; keyCode: number }) => {
        if ((e.charCode || e.keyCode) === 27) {
            props.onClose();
        }
    };

    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscapeKeyDown);
        return function cleanUp() {
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
        };
    }, []);

    return (
        <Modal onClick={(e) => e.stopPropagation()} show={props.show}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <Header>
                    <CloseButton onClick={props.onClose}>
                        <CloseIcon />
                    </CloseButton>
                    <Text>Unlock your photos</Text>
                </Header>
                <Body>
                    <TextPlain>
                        Get all the photos from <TextBold>{album?.name}</TextBold> in hi-resolution
                        with no watermark.
                    </TextPlain>
                    <TextBold>$5</TextBold>
                </Body>
                <CheckoutButton>
                    <ButtonText onClick={chackoutHandler}>Checkout</ButtonText>
                </CheckoutButton>
            </ModalContent>
        </Modal>
    );
};
