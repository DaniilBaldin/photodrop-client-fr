import React, { FC, useState } from 'react';

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
    SpinnerAnimation,
} from './paymentStyles';

import CloseIcon from '@mui/icons-material/Close';
import { useLocation } from 'react-router-dom';
import { Selector } from '~/store/hooks/hooks';
import { tokenSelector } from '~/store/selectors/tokenSelector';
import { oneAlbumSelector } from '~/store/selectors/oneAlbumSelector';

import { Props } from '~/types/paymentModalTypes';

export const PaymentModal: FC<Props> = (props) => {
    const id = useLocation().pathname.split('/')[2] || props.id;

    const [loading, setLoading] = useState<boolean>(false);

    const jwtToken = Selector(tokenSelector);
    const album = Selector(oneAlbumSelector);

    const baseUrl = import.meta.env.VITE_BASE_URL;

    const checkoutHandler = async () => {
        setLoading(true);
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
            setLoading(false);
            localStorage.setItem('albumId', id as string);
            window.location.replace(data.url);
        }
    };

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
                    <ButtonText onClick={checkoutHandler}>Checkout </ButtonText>
                    {loading && (
                        <div>
                            <SpinnerAnimation />
                        </div>
                    )}
                </CheckoutButton>
            </ModalContent>
        </Modal>
    );
};
