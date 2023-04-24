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

    const [open, setOpen] = useState<boolean>(false);
    const [selfie, setSelfie] = useState<string | null>('');
    const [loading, setLoading] = useState<boolean>(false);
    console.log(loading);

    useEffect(() => {
        if (user?.selfie.split(':')[0] !== 'blob') {
            setSelfie((user?.selfie as string) + '?_' + new Date().getTime());
        } else {
            setSelfie(user?.selfie as string);
        }
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
            return;
        }

        setSelfie(URL.createObjectURL(file));
    };

    const handleLoading = () => {
        setLoading(true);
    };
    // setLoading(true);

    const imageStyle = !loading ? { display: 'none' } : {};

    return (
        <Container>
            <Main>
                <Title>{`Welcome, ${(user?.name as string) || 'User'}.`}</Title>
                <SubTitle>Your selfie</SubTitle>
                <Avatar>
                    {!loading && <Image src={'/avatar.png'} alt="Selfie" />}
                    <Image
                        src={selfie || user?.selfie || '/avatar.png'}
                        alt="Selfie"
                        loading="lazy"
                        style={imageStyle}
                        onLoad={handleLoading}
                    />

                    <ChangeSelfie type="button" onClick={handleClick}>
                        <PencilImage src="/Pencil.svg" alt="Pencil" />
                    </ChangeSelfie>
                </Avatar>
                <ChangeNameLink to={'/settings-change-name'}>
                    <ChangeName>
                        <ButtonTitle>Your name</ButtonTitle>
                        <ButtonText>Tell us your name to personalize communications.</ButtonText>
                        {window.screen.width > 425 ? (
                            <ArrowRight fontSize="medium" />
                        ) : (
                            <ArrowRight fontSize="small" />
                        )}
                    </ChangeName>
                </ChangeNameLink>
                <UseFileModal
                    open={open}
                    onClose={() => {
                        setOpen(false);
                    }}
                    image={selfie || user?.selfie || '/avatar.png'}
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
