import React, { FC, useEffect, useState } from 'react';
import { WithData } from './components/withData/WithData';
import { NoData } from './components/noData/NoData';
import { Dispatch, Selector } from '~/store/hooks/hooks';
import { tokenSelector } from '~/store/selectors/tokenSelector';
import { albumSelector } from '~/store/selectors/albumSelector';
import { addAlbums } from '~/store/reducers/albumsReducer';
import { addPhotos } from '~/store/reducers/photosReducer';
import { photoSelector } from '~/store/selectors/photoSelector';
import { Loader } from './components/loader/loader';
import { newUserSelector } from '~/store/selectors/newUseSelector';
import { useNavigate } from 'react-router-dom';
import { Albums, PhotosData } from '~/types/mainPageTypes';

export const MainPage: FC = () => {
    const dispatch = Dispatch();
    const navigate = useNavigate();

    localStorage.setItem('albumId', '');

    const jwtToken = Selector(tokenSelector);

    const userAlbums = Selector(albumSelector);
    const userPhotos = Selector(photoSelector);
    const newUser = Selector(newUserSelector);

    const baseUrl = import.meta.env.VITE_BASE_URL;

    const [albumLoading, setAlbumLoading] = useState<boolean>(false);
    const [photoLoading, setPhotoLoading] = useState<boolean>(false);

    useEffect(() => {
        setAlbumLoading(true);
        setPhotoLoading(true);
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
                setAlbumLoading(false);
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
                setPhotoLoading(false);
            }
        };
        if (!userAlbums) {
            void getUserAlbums();
        }
        if (!userPhotos) {
            void getUserPhotos();
        }
    }, []);

    useEffect(() => {
        if (newUser) {
            navigate('/selfie');
        }
    }, [newUser]);

    if ((albumLoading && !userAlbums) || (photoLoading && !userPhotos)) {
        return <Loader />;
    }

    if (!(userAlbums as Albums)?.albums.length || !(userPhotos as PhotosData)?.photos.length) {
        return <NoData />;
    } else if (
        (userAlbums as Albums)?.albums.length ||
        !(userPhotos as PhotosData)?.photos.length
    ) {
        return <WithData />;
    } else return <p>Loading...</p>;
};
