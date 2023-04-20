import React, { FC, useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import ReactCrop, { Area, Point } from 'react-easy-crop';

import { Converter } from '~/utils/imageConverter';

import {
    Modal,
    ModalContent,
    FileWindow,
    Header,
    Text,
    CloseButton,
    TextSmall,
    Footer,
    Button,
    ButtonColored,
    CropStyle,
    SpinnerAnimation,
} from './useFileStyles';

import CloseIcon from '@mui/icons-material/Close';
import { Dispatch, Selector } from '~/store/hooks/hooks';
import { changeSelfie } from '~/store/reducers/userReducer';
import { tokenSelector } from '~/store/selectors/tokenSelector';
import { useLocation, useNavigate } from 'react-router-dom';

type Props = {
    open: boolean;
    onClose: () => void;
    image: string | null;
    onRetake: () => void;
};

interface area {
    x: number;
    y: number;
    width: number;
    height: number;
}

export const UseFileModal: FC<Props> = (props) => {
    const image = props.image;
    const path = useLocation().pathname;
    const navigate = useNavigate();

    const dispatch = Dispatch();

    const baseUrl = import.meta.env.VITE_BASE_URL;
    const jwtToken = Selector(tokenSelector);

    const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [minZoom, setMinZoom] = useState(1);
    const [area, setArea] = useState<area>({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    });
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const onCropComplete = useCallback((_croppedArea: Area, croppedAreaPixels: Area) => {
        setArea(croppedAreaPixels);
    }, []);

    const imageHandler = async () => {
        if (image && area) {
            setLoading(true);
            const final = (await Converter(image, area)) as Blob;

            const formData = new FormData();
            formData.append('Content-Type', 'multipart/form-data');
            formData.append('selfie', final, 'selfie.jpeg');

            const response = await fetch(`${baseUrl}user/upload-selfie`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                    'ngrok-skip-browser-warning': '69420',
                },
                body: formData,
            });
            const data = await response.json();
            if (!response.ok && !data.success) {
                setError('Error in changing selfie!');
                setLoading(false);
            }
            if (response.ok && data.success) {
                if (path === '/selfie') {
                    navigate('/');
                }
                setLoading(false);
                dispatch(changeSelfie(URL.createObjectURL(final)));
                props.onClose();
            }
        }
    };
    if (error) {
        alert(error);
        setError('');
    }

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
        <Modal onClick={(props.onClose, (e) => e.stopPropagation())} show={props.open}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <Header>
                    <CloseButton onClick={props.onClose}>
                        <CloseIcon />
                    </CloseButton>
                    <Text>Take selfie</Text>
                </Header>
                <TextSmall>Drag and zoom image to crop</TextSmall>
                <FileWindow>
                    <ReactCrop
                        image={image ? image : ''}
                        aspect={1}
                        style={{ cropAreaStyle: CropStyle }}
                        crop={crop}
                        zoom={zoom}
                        showGrid={false}
                        minZoom={minZoom}
                        cropShape="round"
                        objectFit="vertical-cover"
                        cropSize={{ width: 280, height: 260 }}
                        onCropChange={setCrop}
                        onCropComplete={onCropComplete}
                        onZoomChange={setZoom}
                        onMediaLoaded={({ height, width }) => {
                            const smallSide = height >= width ? width : height;
                            setMinZoom(285 / smallSide);
                            setZoom(285 / smallSide);
                        }}
                    />
                </FileWindow>
                <Footer>
                    <Button
                        type="button"
                        onClick={() => {
                            props.onRetake();
                        }}
                    >
                        Retake
                    </Button>
                    <ButtonColored type="button" onClick={imageHandler}>
                        Save{' '}
                        {loading && (
                            <div>
                                <SpinnerAnimation />
                            </div>
                        )}
                    </ButtonColored>
                </Footer>
            </ModalContent>
        </Modal>,
        document.getElementById('root') as HTMLElement,
    );
};
