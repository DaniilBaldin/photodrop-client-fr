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

type Props = {
    show: boolean;
    onClose: () => void;
};

//TODO: Checkout session link to stripe payment

export const PaymentModal: FC<Props> = (props) => {
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
                        Get all the photos from <TextBold>Album 1</TextBold> in hi-resolution with
                        no watermark.
                    </TextPlain>
                    <TextBold>$5</TextBold>
                </Body>
                <CheckoutButton>
                    <ButtonText>Checkout</ButtonText>
                </CheckoutButton>
            </ModalContent>
        </Modal>
    );
};
