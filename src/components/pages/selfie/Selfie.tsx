import React, { useState } from 'react';

import { Header } from '~/components/common/header/header';

import { SelfieModal } from './components/SelfieModal';

import AddIcon from '@mui/icons-material/Add';

import { Main, SelfieMain, SelfieDiv, TextTitle, Text, ImageBox, Button } from './selfieStyles';

export const Selfie = () => {
    const [show, setShow] = useState<boolean>(false);
    return (
        <Main>
            <Header />
            <SelfieMain>
                <SelfieDiv>
                    <TextTitle>Add a selfie</TextTitle>
                    <Text>A selfie allows your photos to be synced with your account.</Text>
                    <ImageBox>
                        <img src="/avatar.png" alt="avatar" width={181} height={181} />
                        <Button
                            type="button"
                            onClick={() => {
                                setShow(true);
                            }}
                        >
                            <AddIcon />
                        </Button>
                        <SelfieModal
                            onClose={() => {
                                setShow(false);
                            }}
                            show={show}
                            onRetake={() => {
                                setShow(true);
                            }}
                        ></SelfieModal>
                    </ImageBox>
                </SelfieDiv>
            </SelfieMain>
        </Main>
    );
};
