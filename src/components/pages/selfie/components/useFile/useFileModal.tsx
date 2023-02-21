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
} from './useFileStyles';

import CloseIcon from '@mui/icons-material/Close';

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

    const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [minZoom, setMinZoom] = useState(1);
    const [area, setArea] = useState<area>({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    });

    const onCropComplete = useCallback((_croppedArea: Area, croppedAreaPixels: Area) => {
        setArea(croppedAreaPixels);
    }, []);

    const imageHandler = async () => {
        if (image && area) {
            const final = (await Converter(image, area)) as Blob;
            console.log(final);

            const formData = new FormData();
            formData.append('Content-Type', 'multipart/form-data');
            formData.append('file', final as Blob, 'selfie.jpeg');
            console.log(formData.getAll('file'));

            //TODO: here goes fetch hook. Add redirect if OK.
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
                            props.onClose();
                        }}
                    >
                        Retake
                    </Button>
                    <ButtonColored type="button" onClick={imageHandler}>
                        Save
                    </ButtonColored>
                </Footer>
            </ModalContent>
        </Modal>,
        document.getElementById('root') as HTMLElement,
    );
};
