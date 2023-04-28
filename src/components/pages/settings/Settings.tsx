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
    Img,
    ChangeSelfie,
    PencilImage,
    ChangeName,
    ButtonTitle,
    ButtonText,
    ArrowRight,
    ChangeNameLink,
} from './settingsStyles';
import { Loader } from '../main/components/loader/loader';
import { getBlob } from '~/utils/getBlob';

export const Settings = () => {
    const user = Selector(userSelector);

    const [open, setOpen] = useState<boolean>(false);
    const [selfie, setSelfie] = useState<string>('');

    const [userLoaded, setUserLoaded] = useState<boolean>(false);

    useEffect(() => {
        if (user?.selfie.split(':')[0] !== 'blob') {
            getBlob(user?.selfie as string).then((result: Blob | undefined) => {
                setSelfie(URL.createObjectURL(result as Blob));
            });
        } else {
            setSelfie(user?.selfie as string);
        }
    }, [user]);

    console.log(selfie);

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

        setSelfie(URL.createObjectURL(file));
    };

    useEffect(() => {
        if (user) setUserLoaded(true);
    }, [user]);

    if (!userLoaded) {
        return <Loader />;
    }

    return (
        <Container>
            <Main>
                <Title>{`Welcome, ${(user?.name as string) || 'User'}.`}</Title>
                <SubTitle>Your selfie</SubTitle>
                <Avatar>
                    <Img alt={'selfie'} src={user?.selfie} placeholderSrc="/avatar.png" />

                    <ChangeSelfie type="button" onClick={handleClick}>
                        <PencilImage src="/pencil.png" alt="Pencil" />
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
