import React, { useEffect, FC, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import Webcam from 'react-webcam';

import {
    Modal,
    ModalContent,
    WebCamWindow,
    WebcamVideo,
    Header,
    Text,
    CloseButton,
    TextSmall,
    Footer,
    Button,
    ButtonColored,
} from './useWebCamStyles';

import CloseIcon from '@mui/icons-material/Close';

type Props = {
    show: boolean;
    onClose: () => void;
    onRetake: () => void;
};

export const UseWebCamModal: FC<Props> = (props) => {
    const webcamRef = useRef<Webcam>(null);
    const [imgSrc, setimgSrc] = useState<string | null>(null);

    const imageHandler = () => {
        fetch(imgSrc as RequestInfo)
            .then((result) => result.blob())
            .then((blob) => {
                const formData = new FormData();
                formData.append('Content-Type', 'multipart/form-data');
                formData.append('file', blob as Blob, 'selfie.jpeg');
                console.log(formData.getAll('file'));

                //TODO: Here goes fetch hook. Add redirect if OK.
            });
    };

    const capture = React.useCallback(() => {
        if (webcamRef.current === null) {
            return;
        } else {
            const imageSrc = webcamRef.current.getScreenshot();

            setimgSrc(imageSrc);
            imageHandler();
        }
    }, [webcamRef, setimgSrc]);

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
        <Modal onClick={(props.onClose, (e) => e.stopPropagation())} show={props.show}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <Header>
                    <CloseButton onClick={props.onClose}>
                        <CloseIcon />
                    </CloseButton>
                    <Text>Take selfie</Text>
                </Header>
                <TextSmall>Drag and zoom image to crop</TextSmall>
                <WebCamWindow>
                    <WebcamVideo
                        audio={false}
                        height={200}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width={200}
                    />
                </WebCamWindow>
                <Footer>
                    <Button
                        type="button"
                        onClick={() => {
                            props.onRetake();
                            props.onClose();
                        }}
                    >
                        Retake
                    </Button>
                    <ButtonColored type="button" onClick={capture}>
                        Save
                    </ButtonColored>
                </Footer>
            </ModalContent>
        </Modal>,
        document.getElementById('root') as HTMLElement,
    );
};
