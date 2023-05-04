import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
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

export const Settings: FC = () => {
    const user = Selector(userSelector);

    const [open, setOpen] = useState<boolean>(false);
    const [selfie, setSelfie] = useState<string>('');

    const [userLoaded, setUserLoaded] = useState<boolean>(false);

    useEffect(() => {
        if (user) setSelfie(user.selfie);
    }, [user]);

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

    useEffect(() => {
        if (user) setUserLoaded(true);
    }, [user]);

    if (!userLoaded) {
        return <Loader />;
    }

    let name: string = (user?.name as string).replace(/\s/g, '');
    name = name.charAt(0).toUpperCase() + name?.slice(1);

    return (
        <Container>
            <Main>
                <Title>{`Welcome, ${name || 'User'}.`}</Title>
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
                    accept="image/*"
                    title="Upload file smaller than 2MB"
                    placeholder="Upload file smaller than 2MB"
                />
            </Main>
        </Container>
    );
};
