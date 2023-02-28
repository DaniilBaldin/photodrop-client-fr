import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FreeMode } from 'swiper';

import { Lightbox } from '~/components/common/modal/lightbox/Lightbox';

import 'swiper/css';
import 'swiper/css/free-mode';

import {
    ContainerWithData,
    MainWithData,
    Subtitle,
    AlbumsContainer,
    SwiperContainer,
    Slide,
    AlbumButton,
    PhotosContainer,
    ImageButton,
    Photos,
    ButtonText,
    Gradient,
} from './mainPageWithDataStyles';

type Photos = {
    data: {
        id: number;
        photo_logo: string;
        client_name: string;
        photo_url: string;
        album_id: string;
        marked_url: string;
        marked_logo: string;
        owned: boolean;
    }[];
    success: boolean;
};

type Photo = {
    id: number;
    photo_logo: string;
    client_name: string;
    photo_url: string;
    album_id: string;
    marked_url: string;
    marked_logo: string;
    owned: boolean;
};

type Albums = {
    data: {
        id: number;
        album_name: string;
        album_location: string;
        date: string;
        person_id: string;
        album_logo: string;
        owned: boolean;
    }[];
    success: boolean;
};

type Album = {
    id: number;
    album_name: string;
    album_location: string;
    date: string;
    person_id: string;
    album_logo: string;
    owned: boolean;
};

type Props = {
    photos: Photos;
    albums: Albums;
};

export const WithData: FC<Props> = (props) => {
    const albums = props.albums;
    const photos = props.photos;
    const [show, setShow] = useState<boolean>(false);
    const [image, setImage] = useState<string>('');
    const [buttons, setButtons] = useState<boolean>(true);

    const navigate = useNavigate();

    return (
        <ContainerWithData>
            <MainWithData>
                <AlbumsContainer>
                    <Subtitle>Albums</Subtitle>
                    <SwiperContainer
                        slidesPerView={'auto'}
                        spaceBetween={10}
                        slidesOffsetAfter={10}
                        freeMode={true}
                        modules={[FreeMode]}
                    >
                        {albums.data.map((e: Album) => (
                            <Slide key={e.id}>
                                <AlbumButton
                                    image={e.album_logo}
                                    type="button"
                                    onClick={() => {
                                        navigate(`/album/${e.id}`);
                                    }}
                                >
                                    <ButtonText>{e.album_name}</ButtonText>
                                    <Gradient />
                                </AlbumButton>
                            </Slide>
                        ))}
                    </SwiperContainer>
                </AlbumsContainer>
                <PhotosContainer>
                    <Subtitle>All photos</Subtitle>
                    <Photos>
                        {photos.data.map((photo: Photo, index) =>
                            photo.owned ? (
                                <ImageButton
                                    key={index}
                                    image={photo.photo_logo}
                                    onClick={() => {
                                        setShow(true);
                                        setImage(photo.photo_url);
                                        setButtons(true);
                                    }}
                                ></ImageButton>
                            ) : (
                                <ImageButton
                                    key={photo.marked_logo}
                                    image={photo.marked_logo}
                                    onClick={() => {
                                        setShow(true);
                                        setImage(photo.marked_url);
                                        setButtons(false);
                                    }}
                                ></ImageButton>
                            ),
                        )}
                    </Photos>
                    <Lightbox
                        onClose={() => setShow(false)}
                        show={show}
                        image={image}
                        buttons={buttons}
                    ></Lightbox>
                </PhotosContainer>
            </MainWithData>
        </ContainerWithData>
    );
};
