import React, { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';

import {
    Modal,
    ModalMain,
    Image,
    CloseButton,
    BottomButtons,
    FrameButton,
    DownloadButton,
    ArrowDown,
    Gradient,
} from './lightboxStyles';

import CloseIcon from '@mui/icons-material/Close';

type Props = {
    image?: string;
    show: boolean;
    onClose: () => void;
};

export const Lightbox: FC<Props> = (props) => {
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

    return createPortal(
        <Modal show={props.show}>
            <CloseButton onClick={props.onClose}>
                <CloseIcon fontSize="large" />
            </CloseButton>
            <ModalMain onClick={(e) => e.stopPropagation()}>
                <Image src={props.image} alt="alt" loading="lazy" />
            </ModalMain>
            <BottomButtons>
                <DownloadButton href={props.image} download={'art'}>
                    <ArrowDown src="/Vector.svg" alt="ArrowDown" />
                    <img src="/Rectangle.svg" alt="Rectangle" />
                    Download
                </DownloadButton>
                <FrameButton>See in a frame</FrameButton>
            </BottomButtons>
            <Gradient></Gradient>
        </Modal>,
        document.getElementById('root') as HTMLElement,
    );
};
