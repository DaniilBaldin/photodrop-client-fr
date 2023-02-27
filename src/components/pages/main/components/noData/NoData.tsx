import React, { useState } from 'react';

import { FreeMode } from 'swiper';

import { Lightbox } from '~/components/common/modal/lightbox/Lightbox';

import { ArtPrints } from '~/utils/artPrints';

import 'swiper/css';
import 'swiper/css/free-mode';

import {
    Container,
    MainNoData,
    Notification,
    NotificationImage,
    NotificationTitle,
    NotificationMessage,
    ArtsContainer,
    Art,
    ArtButton,
    Slide,
    SwiperContainer,
    ArtsTitle,
} from './mainPageStyles';

type Art = {
    index: number;
    src: string;
    alt: string;
};

export const NoData = () => {
    const [show, setShow] = useState<boolean>(false);
    const [image, setImage] = useState<string>('');
    return (
        <Container>
            <MainNoData>
                <Notification>
                    <NotificationImage src="/Notification.svg" alt="Notification" />
                    <NotificationTitle>Your photos will drop soon.</NotificationTitle>
                    <NotificationMessage>
                        You will get a message when they are ready. It can take up to 48 hours.
                    </NotificationMessage>
                </Notification>
                <ArtsContainer>
                    <ArtsTitle>Browse Artist Prints</ArtsTitle>
                    <SwiperContainer
                        slidesPerView={'auto'}
                        spaceBetween={10}
                        slidesOffsetAfter={10}
                        freeMode={true}
                        modules={[FreeMode]}
                    >
                        {ArtPrints.map((e: Art) => (
                            <Slide key={e.index}>
                                <ArtButton
                                    type="button"
                                    onClick={() => {
                                        setShow(true);
                                        setImage(e.src);
                                    }}
                                >
                                    <Art src={e.src} alt={e.alt} loading="lazy"></Art>
                                </ArtButton>
                            </Slide>
                        ))}
                    </SwiperContainer>
                </ArtsContainer>
                <Lightbox onClose={() => setShow(false)} show={show} image={image}></Lightbox>
            </MainNoData>
        </Container>
    );
};
