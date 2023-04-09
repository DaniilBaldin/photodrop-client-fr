import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Main,
    MainDiv,
    Title,
    TextPlain,
    TextBold,
    Image,
    Button,
    ButtonText,
    TextSmall,
} from './SuccessStyles';
import { Dispatch, Selector } from '~/store/hooks/hooks';

import { tokenSelector } from '~/store/selectors/tokenSelector';
import { removeId } from '~/store/reducers/albumIdReducer';

type Data = {
    album: {
        id: number;
        name: string;
        location: string;
        date: string;
        photographerId: number;
        owned: boolean;
        coverImageUrl: string;
    };
    success: boolean;
};

export const SuccessPage = () => {
    const navigate = useNavigate();
    const dispatch = Dispatch();

    const id = localStorage.getItem('albumId');

    const jwtToken = Selector(tokenSelector);
    const [album, setAlbum] = useState<Data | null>(null);
    console.log(id);
    console.log(album);

    useEffect(() => {
        if (!id) navigate('/');
    }, [id]);

    const baseUrl = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        const getAlbum = async () => {
            const response = await fetch(`${baseUrl}user/album/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${jwtToken}`,
                    'ngrok-skip-browser-warning': '69420',
                },
                body: undefined,
            });
            const data = await response.json();
            if (data.success) {
                setAlbum(data);
            }
        };
        void getAlbum();
    }, [id]);

    useEffect(() => {
        const addAlbum = async () => {
            const response = await fetch(`${baseUrl}user/add-album`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${jwtToken}`,
                    'ngrok-skip-browser-warning': '69420',
                },
                body: JSON.stringify({
                    albumId: id,
                }),
            });
            const data = await response.json();
            if (data?.success) {
                dispatch(removeId);
            }
        };
        if (id?.length) {
            void addAlbum();
        }
    }, [id]);

    const buttonHandler = () => {
        navigate(`/album/${id}`);
    };

    return (
        <Main>
            <MainDiv>
                <Title>Thank you</Title>
                <TextPlain>
                    The album <TextBold>{album?.album.name}</TextBold> is now unlocked.
                </TextPlain>
                <TextPlain>
                    You can now download, share, post, and print your hi-res, watermark-free,
                    glorious memories.
                </TextPlain>
                <Image src={album?.album.coverImageUrl} alt="Album logo" />
                <Button onClick={buttonHandler}>
                    <ButtonText>See photos</ButtonText>
                </Button>
                <TextSmall>You will receive an email with your order details.</TextSmall>
            </MainDiv>
        </Main>
    );
};
