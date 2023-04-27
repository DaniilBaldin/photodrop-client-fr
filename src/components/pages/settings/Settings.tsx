import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Selector } from '~/store/hooks/hooks';
import { userSelector } from '~/store/selectors/userSelector';

import { UseFileModal } from '~/components/common/modal/useFile/useFileModal';

import LazyLoad from 'react-lazyload';

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
import { Loader } from '../main/components/loader/loader';

export const Settings = () => {
    const user = Selector(userSelector);

    const [open, setOpen] = useState<boolean>(false);
    const [selfie, setSelfie] = useState<string>(user?.selfie as string);
    const [imageLoaded, setImageLoaded] = useState(false);

    const [userLoaded, setUserLoaded] = useState<boolean>(false);

    useEffect(() => {
        if (user?.selfie.split(':')[0] !== 'blob') {
            setSelfie((user?.selfie as string) + '?' + new Date().getTime());
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

    const imageStyle = !imageLoaded ? { display: 'none' } : { display: 'inline-block' };

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
                    <LazyLoad height={150}>
                        {!imageLoaded && <Image src={'/avatar.png'} alt="Selfie" />}
                        <Image
                            alt={'selfie'}
                            src={user?.selfie as string}
                            style={imageStyle}
                            decoding="sync"
                            onLoad={() => {
                                setImageLoaded(true);
                            }}
                        />
                    </LazyLoad>

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
