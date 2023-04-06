import React, { useEffect } from 'react';
import { WithData } from './components/withData/WithData';
import { NoData } from './components/noData/NoData';
import { Dispatch, Selector } from '~/store/hooks/hooks';
import { tokenSelector } from '~/store/selectors/tokenSelector';
import { albumSelector } from '~/store/selectors/albumSelector';
import { addAlbums } from '~/store/reducers/albumsReducer';
import { addPhotos } from '~/store/reducers/photosReducer';
import { photoSelector } from '~/store/selectors/photoSelector';

type Albums = {
    albums: {
        id: number;
        name: string;
        location: string;
        date: string;
        photographerId: number;
        owned: boolean;
        coverImageUrl: string;
    }[];
    success: boolean;
} | null;

type PhotosData = {
    photos: {
        id: string;
        name: string;
        ext: string;
        phoneNumbers: string[];
        albumId: number;
        owned: boolean;
        photoUrl: string;
        thumbnailUrl: string;
        phWatermarkUrl: string;
        thumbWatermarkUrl: string;
    }[];
    success: boolean;
} | null;

export const MainPage = () => {
    const dispatch = Dispatch();

    const jwtToken = Selector(tokenSelector);
    const userAlbums = Selector(albumSelector);
    const userPhotos = Selector(photoSelector);

    const baseUrl = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        const getUserAlbums = async () => {
            const response = await fetch(`${baseUrl}user/album/all`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${jwtToken}`,
                    'ngrok-skip-browser-warning': '69420',
                },
                body: undefined,
            });
            const data = await response.json();
            if (data) {
                dispatch(addAlbums(data));
            }
        };
        const getUserPhotos = async () => {
            const response = await fetch(`${baseUrl}user/photo/all`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${jwtToken}`,
                    'ngrok-skip-browser-warning': '69420',
                },
                body: undefined,
            });
            const data = await response.json();
            if (data) {
                dispatch(addPhotos(data));
            }
        };
        if (!userAlbums) {
            void getUserAlbums();
        }
        if (!userPhotos) {
            void getUserPhotos();
        }
    }, []);

    if (!(userAlbums as Albums)?.albums.length || !(userPhotos as PhotosData)?.photos.length) {
        return <NoData />;
    }
    if ((userAlbums as Albums)?.albums.length || !(userPhotos as PhotosData)?.photos.length) {
        return <WithData />;
    } else return <p>No Albums!</p>;
};
