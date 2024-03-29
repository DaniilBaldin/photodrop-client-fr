import React, { ChangeEvent, useRef, useState } from 'react';
import { UseFileModal } from '~/components/common/modal/useFile/useFileModal';

import AddIcon from '@mui/icons-material/Add';

import { Main, SelfieMain, SelfieDiv, TextTitle, Text, ImageBox, Button } from './selfieStyles';

export const Selfie = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [selfie, setSelfie] = useState<string>('/avatar.png');

    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        setOpen(true);
    };

    const handleRetake = () => {
        inputRef.current?.click();
    };

    const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event?.target?.files?.[0];
        if (!file) {
            return;
        }
        const fileSize = file.size; // 3MB

        if (fileSize > 2 * 1000000) {
            alert(
                `File size is too large, please upload image of size less than 2MB.\nSelected File Size: ${
                    fileSize / 1000000
                }MB only`,
            );
            return;
        }

        setSelfie(URL.createObjectURL(file));
    };

    return (
        <Main>
            <SelfieMain>
                <SelfieDiv>
                    <TextTitle>Add a selfie</TextTitle>
                    <Text>A selfie allows your photos to be synced with your account.</Text>
                    <ImageBox>
                        <img src={selfie || '/avatar.png'} alt="avatar" width={181} height={181} />
                        <Button type="button" onClick={handleClick}>
                            <AddIcon />
                        </Button>
                        <UseFileModal
                            open={open}
                            onClose={() => {
                                setOpen(false);
                            }}
                            image={selfie}
                            onRetake={handleRetake}
                        ></UseFileModal>
                        <input
                            type="file"
                            style={{ display: 'none' }}
                            ref={inputRef}
                            onChange={handleFile}
                            accept="image/*"
                            title="Upload file smaller than 2MB"
                            placeholder="Upload file smaller than 2MB"
                        />
                    </ImageBox>
                </SelfieDiv>
            </SelfieMain>
        </Main>
    );
};
