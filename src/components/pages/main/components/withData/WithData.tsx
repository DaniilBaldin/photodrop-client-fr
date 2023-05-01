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
    Text,
    Gradient,
} from './mainPageWithDataStyles';

import { Selector } from '~/store/hooks/hooks';
import { albumSelector } from '~/store/selectors/albumSelector';
import { photoSelector } from '~/store/selectors/photoSelector';

import 'react-lazy-load-image-component/src/effects/opacity.css';

import { PaymentModal } from '~/components/common/modal/payment/PaymentModal';
import { ButtonContainer, UnlockButton, ButtonText } from '~/components/pages/album/albumStyles';

import { Albums, PhotosData, Album, Photo, AlbumsArray } from '~/types/withDataTypes';

export const WithData: FC = () => {
    const [show, setShow] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [image, setImage] = useState<string>('');
    const [buttons, setButtons] = useState<boolean>(true);

    const navigate = useNavigate();

    const albums = Selector(albumSelector);
    const photos = Selector(photoSelector);

    const albumsArray = (albums as Albums)?.albums;
    const photoArray = (photos as PhotosData)?.photos;

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
                        {albumsArray
                            ?.slice()
                            .reverse()
                            .map((e: Album) => (
                                <Slide key={e.id}>
                                    <AlbumButton
                                        image={e.coverImageUrl}
                                        type="button"
                                        onClick={() => {
                                            navigate(`/album/${e.id}`);
                                        }}
                                    >
                                        <Text>{e.name}</Text>
                                        <Gradient />
                                    </AlbumButton>
                                </Slide>
                            ))}
                    </SwiperContainer>
                </AlbumsContainer>
                <PhotosContainer>
                    <Subtitle>All photos</Subtitle>
                    <Photos>
                        {photoArray?.map((photo: Photo, index) =>
                            photo.owned ? (
                                <ImageButton
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

                    <Lightbox
                        onClose={() => setShow(false)}
                        show={show}
                        image={image}
                        buttons={buttons}
                    ></Lightbox>
                </PhotosContainer>

                <ButtonContainer
                    show={
                        !(albumsArray as AlbumsArray)[0].owned &&
                        (albumsArray as AlbumsArray).length <= 1
                    }
                >
                    <UnlockButton
                        onClick={() => {
                            setOpen(true);
                        }}
                        show={(albumsArray as AlbumsArray)[0].owned}
                    >
                        <ButtonText>Unlock your photos</ButtonText>
                    </UnlockButton>
                </ButtonContainer>
                <PaymentModal
                    onClose={() => {
                        setOpen(false);
                    }}
                    id={(albumsArray as AlbumsArray)[0].id.toString()}
                    show={open}
                ></PaymentModal>
                <Lightbox
                    onClose={() => setShow(false)}
                    show={show}
                    image={image}
                    buttons={buttons}
                ></Lightbox>
            </MainWithData>
        </ContainerWithData>
    );
};
