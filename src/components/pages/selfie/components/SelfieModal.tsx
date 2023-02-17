import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { UseWebCamModal } from './useWebCam/useWebCam';
import { UseFileModal } from './useFile/useFileModal';

import CloseIcon from '@mui/icons-material/Close';

import {
    Modal,
    ModalContent,
    Header,
    Text,
    CloseButton,
    Button,
    Body,
    TextBold,
} from './modalStyles';

type Props = {
    show: boolean;
    onClose: () => void;
    onRetake: () => void;
};

// TODO: file handling.

export const SelfieModal: FC<Props> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [selfie, setSelfie] = useState<string | null>('');
    const [show, setShow] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    const handleClick = () => {
        setOpen(true);
        props.onClose();
        inputRef.current?.click();
    };

    const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event?.target?.files?.[0];
        if (!file) {
            return;
        }

        setSelfie(URL.createObjectURL(file));
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
    return createPortal(
        <Modal onClick={props.onClose} show={props.show}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <Header>
                    <CloseButton onClick={props.onClose}>
                        <CloseIcon />
                    </CloseButton>
                    <Text>Upload options</Text>
                </Header>
                <Body>
                    <Button type="button" onClick={handleClick}>
                        <TextBold>Upload a file</TextBold>
                    </Button>
                    <Button
                        type="button"
                        onClick={() => {
                            props.onClose();
                            setShow(true);
                        }}
                    >
                        <TextBold>Use camera</TextBold>
                    </Button>
                </Body>
                <UseWebCamModal
                    onClose={() => {
                        setShow(false);
                    }}
                    show={show}
                    onRetake={props.onRetake}
                ></UseWebCamModal>
                <UseFileModal
                    open={open}
                    onClose={() => {
                        setOpen(false);
                    }}
                    image={selfie}
                    onRetake={props.onRetake}
                ></UseFileModal>
                <input
                    type="file"
                    style={{ display: 'none' }}
                    ref={inputRef}
                    onChange={handleFile}
                />
            </ModalContent>
        </Modal>,
        document.getElementById('root') as HTMLElement,
    );
};
