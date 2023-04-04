import React, { useEffect, FC, useRef, useState, useCallback } from 'react';
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
import { Dispatch, Selector } from '~/store/hooks/hooks';
import { tokenSelector } from '~/store/selectors/tokenSelector';
import { changeSelfie } from '~/store/reducers/userReducer';

type Props = {
    show: boolean;
    onClose: () => void;
    onRetake: () => void;
};

export const UseWebCamModal: FC<Props> = (props) => {
    const webcamRef = useRef<Webcam>(null);

    const [error, setError] = useState<string>('');

    const dispatch = Dispatch();

    const baseUrl = import.meta.env.VITE_BASE_URL;
    const jwtToken = Selector(tokenSelector);

    const capture = useCallback(async () => {
        if (webcamRef.current === null) {
            return;
        } else {
            setError('');
            const imageSrc = webcamRef.current.getScreenshot();

            await fetch(imageSrc as RequestInfo)
                .then((res) => res.blob())
                .then(async (result) => {
                    const formData = new FormData();
                    formData.append('Content-Type', 'multipart/form-data');
                    formData.append('selfie', result, 'selfie.jpeg');
                    const response = await fetch(`${baseUrl}user/upload-selfie`, {
                        method: 'POST',
                        headers: {
                            Authorization: `Bearer ${jwtToken}`,
                            'ngrok-skip-browser-warning': '69420',
                        },
                        body: formData,
                    });
                    return [response, result];
                })
                .then((res) => {
                    if (!(res[0] as Response).ok) {
                        setError('Error in changing selfie!');
                    }
                    if ((res[0] as Response).ok) {
                        dispatch(changeSelfie(URL.createObjectURL(res[1] as Blob)));
                        props.onClose();
                    }
                });
        }
    }, [webcamRef]);

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
        <Modal onClick={(e) => e.stopPropagation()} show={props.show}>
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
                        height={300}
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
                {error && <p>{error}</p>}
            </ModalContent>
        </Modal>,
        document.getElementById('root') as HTMLElement,
    );
};
