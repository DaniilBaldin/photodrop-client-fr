import React, { useEffect, useState } from 'react';

import { PaymentModal } from '~/components/common/modal/payment/PaymentModal';
import { Lightbox } from '~/components/common/modal/lightbox/Lightbox';

import {
    Container,
    PhotosContainer,
    Photos,
    ImageButton,
    UnlockButton,
    ButtonContainer,
    ButtonText,
} from './albumStyles';
import { useParams } from 'react-router-dom';
import { Dispatch, Selector } from '~/store/hooks/hooks';
import { tokenSelector } from '~/store/selectors/tokenSelector';
import { fetchHook } from '~/components/hooks/fetchHook';
import { addOneAlbum } from '~/store/reducers/oneAlbumReducer';
import { addAlbumPhotos } from '~/store/reducers/albumPhotosReducer';
import { albumPhotoSelector } from '~/store/selectors/albumPhotoSelector';
import { Loader } from '../main/components/loader/loader';

import 'react-lazy-load-image-component/src/effects/opacity.css';

import { Data, DataPhotos, Photo } from '~/types/albumTypes';

export const Album = () => {
    const { id } = useParams();
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const jwtToken = Selector(tokenSelector);
    const userPhotos = Selector(albumPhotoSelector);
    localStorage.setItem('albumId', '');

    const dispatch = Dispatch();

    const [show, setShow] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [image, setImage] = useState<string>('');
    const [buttons, setButtons] = useState<boolean>(true);

    const method = 'GET';
    const slug = `user/album/${id}`;
    const header = {
        Authorization: `Bearer ${jwtToken}`,
        'ngrok-skip-browser-warning': '69420',
    };

    const [photoLoading, setPhotoLoading] = useState<boolean>(false);

    const { data, loading } = fetchHook<Data>(method, slug, undefined, header);

    useEffect(() => {
        if (data) {
            const album = data?.album;
            dispatch(addOneAlbum(album));
        }
    }, [data]);

    useEffect(() => {
        setPhotoLoading(true);
        const getPhotos = async () => {
            const response = await fetch(`${baseUrl}user/photo/all/${id}`, {
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
                const payload = (data as DataPhotos).photos;
                dispatch(addAlbumPhotos(payload));
                setPhotoLoading(false);
            }
        };

        void getPhotos();
    }, []);

    if (loading || (photoLoading && !userPhotos)) {
        return <Loader />;
    }

    return (
        <div>
            <Container>
                <PhotosContainer>
                    <Photos>
                        {userPhotos?.map((photo: Photo, index) =>
                            (data as Data)?.album.owned ? (
                                <ImageButton
                                    className="image"
                                    key={index}
                                    src={photo.thumbnailUrl}
                                    onClick={() => {
                                        setShow(true);
                                        setImage(photo.photoUrl);
                                        setButtons(true);
                                    }}
                                    effect="opacity"
                                ></ImageButton>
                            ) : (
                                <ImageButton
                                    key={photo.thumbWatermarkUrl}
                                    src={photo.thumbWatermarkUrl}
                                    onClick={() => {
                                        setShow(true);
                                        setImage(photo.phWatermarkUrl);
                                        setButtons(false);
                                    }}
                                    effect="opacity"
                                ></ImageButton>
                            ),
                        )}
                    </Photos>
                    <ButtonContainer show={!(data as Data)?.album.owned}>
                        <UnlockButton
                            onClick={() => {
                                setOpen(true);
                            }}
                            show={(data as Data)?.album.owned}
                        >
                            <ButtonText>Unlock your photos</ButtonText>
                        </UnlockButton>
                    </ButtonContainer>
                    <PaymentModal
                        onClose={() => {
                            setOpen(false);
                        }}
                        show={open}
                    ></PaymentModal>
                    <Lightbox
                        onClose={() => setShow(false)}
                        show={show}
                        image={image}
                        buttons={buttons}
                    ></Lightbox>
                </PhotosContainer>
            </Container>
        </div>
    );
};
