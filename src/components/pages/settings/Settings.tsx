import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Selector } from '~/store/hooks/hooks';
import { userSelector } from '~/store/selectors/userSelector';

import { UseFileModal } from '~/components/common/modal/useFile/useFileModal';

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

export const Settings = () => {
    const user = Selector(userSelector);
    // console.log(user);

    const [open, setOpen] = useState<boolean>(false);
    const [selfie, setSelfie] = useState<string | null>('');

    useEffect(() => {
        setSelfie(user?.selfie as string);
    }, [user]);

    const inputRef = useRef<HTMLInputElement>(null);
    const handleClick = () => {
        setOpen(true);
        // inputRef.current?.click();
    };

    const handleRetake = () => {
        setOpen(false);
        inputRef.current?.click();
        setOpen(true);
    };

    const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event?.target?.files?.[0];
        if (!file) {
            return user?.selfie;
        }

        setSelfie(URL.createObjectURL(file));
    };

    return (
        <Container>
            <Main>
                <Title>{`Welcome, ${(user?.name as string) || 'User'}.`}</Title>
                <SubTitle>Your selfie</SubTitle>
                <Avatar>
                    <Image src={user?.selfie || '/avatar.png'} alt="Selfie" />
                    <ChangeSelfie type="button" onClick={handleClick}>
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
                />
            </Main>
        </Container>
    );
};
