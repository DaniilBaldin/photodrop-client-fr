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

    const user = {
        person_id: 311,
        phone_number: '+380672658690',
        selfie_image:
            'https://photodrop-s3-bucket.s3.amazonaws.com/upload/e435ea74-c28e-41de-83cc-a12eee31d1eb.jpg',
    };
    return (
        <Container>
            <Main>
                <Title>{`Welcome, ${'user'}.`}</Title>
                <SubTitle>Your selfie</SubTitle>
                <Avatar>
                    <Image src={user.selfie_image || '/avatar.png'} alt="Selfie" />
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
