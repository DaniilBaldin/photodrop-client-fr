import React, { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import {
    Modal,
    ModalMain,
    Img,
    CloseButton,
    ButtonContainer,
    UnlockButton,
    BottomButtons,
    FrameButton,
    DownloadButton,
    ArrowDown,
    Gradient,
    Loader,
} from './lightboxStyles';

import CloseIcon from '@mui/icons-material/Close';

type Props = {
    image?: string;
    show: boolean;
    onClose: () => void;
    buttons?: boolean;
};

export const Lightbox: FC<Props> = (props) => {
    const [image, setImage] = useState<string>('');
    const [loaded, setLoaded] = useState<boolean>(false);

    const handleClose = () => {
        props.onClose();
        setImage('');
        setLoaded(false);
    };

    useEffect(() => {
        setImage(props?.image as string);
    });

    useEffect(() => {
        setLoaded(false);
        const img = new Image();
        img.src = image as string;
        img.onload = () => {
            setLoaded(true);
        };
    }, [image]);

    return createPortal(
        <Modal show={props.show}>
            <CloseButton onClick={handleClose}>
                <CloseIcon fontSize="large" />
            </CloseButton>
            <ModalMain onClick={(e) => e.stopPropagation()}>
                {!loaded && <Loader />}
                <Img
                    style={{ display: !loaded ? 'none' : 'inline-block' }}
                    src={props?.image}
                    alt={props.image}
                    loading="lazy"
                />
            </ModalMain>
            {props.buttons === false ? (
                <ButtonContainer>
                    <UnlockButton>Unlock photos</UnlockButton>
                </ButtonContainer>
            ) : (
                <BottomButtons>
                    <DownloadButton href={props.image} download={'art'}>
                        <ArrowDown src="/Vector.svg" alt="ArrowDown" />
                        <img src="/Rectangle.svg" alt="Rectangle" style={{ marginBottom: '2px' }} />
                        Download
                    </DownloadButton>
                    <FrameButton>See in a frame</FrameButton>
                </BottomButtons>
            )}
            <Gradient></Gradient>
        </Modal>,
        document.getElementById('root') as HTMLElement,
    );
};
