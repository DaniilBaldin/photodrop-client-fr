import React, { useEffect, FC, useRef } from 'react';
import { createPortal } from 'react-dom';

import { Modal, ModalContent, WebCamWindow } from './useWebCamStyles';

type Props = {
    show: boolean;
    onClose: () => void;
};

export const UseWebCamModal: FC<Props> = (props) => {
    const videoRef = useRef<HTMLVideoElement>(null);

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
                <WebCamWindow>
                    <video
                        autoPlay
                        id="video"
                        ref={videoRef}
                        width="285"
                        height="285"
                        // muted
                    ></video>
                </WebCamWindow>
            </ModalContent>
        </Modal>,
        document.getElementById('root') as HTMLElement,
    );
};
