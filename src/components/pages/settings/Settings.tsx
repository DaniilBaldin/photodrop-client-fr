import React, { useState } from 'react';

import { SelfieModal } from '../selfie/components/SelfieModal';

import {
    Container,
    Main,
    Title,
    SubTitle,
    Avatar,
    Image,
    ChangeSelfie,
    PencilImage,
    ChangeName,
    ButtonTitle,
    ButtonText,
    ArrowRight,
    ChangeNameLink,
} from './settingsStyles';

//TODO: Username, selfie image from user state

export const Settings = () => {
    const [show, setShow] = useState<boolean>(false);

    const selfieImage =
        'https://photodrop-s3-bucket.s3.amazonaws.com/upload/fd3de29d-301e-4190-8973-1f4878fc3ef5.jpg';
    return (
        <Container>
            <Main>
                <Title>{`Welcome, ${'user'}.`}</Title>
                <SubTitle>Your selfie</SubTitle>
                <Avatar>
                    <Image src={selfieImage || '/avatar.png'} alt="Selfie" />
                    <ChangeSelfie
                        type="button"
                        onClick={() => {
                            setShow(true);
                        }}
                    >
                        <PencilImage src="/Pencil.svg" alt="Pencil" />
                    </ChangeSelfie>
                </Avatar>
                <ChangeNameLink to={'/settings-change-name'}>
                    <ChangeName>
                        <ButtonTitle>Your name</ButtonTitle>
                        <ButtonText>Tell us your name to personalize communications</ButtonText>
                        <ArrowRight fontSize="medium" />
                    </ChangeName>
                </ChangeNameLink>
                <SelfieModal
                    onClose={() => {
                        setShow(false);
                    }}
                    show={show}
                    onRetake={() => {
                        setShow(true);
                    }}
                ></SelfieModal>
            </Main>
        </Container>
    );
};
