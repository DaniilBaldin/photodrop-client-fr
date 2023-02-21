import React from 'react';

import { FreeMode } from 'swiper';

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

//TODO: data fetching hook
//TODO: page with data

export const MainPage = () => {
    const data: string[] = ['sadasdasadasd'];
    return (
        <Container>
            {!data ? (
                <>
                    <MainNoData>
                        <p>Main page with data</p>
                    </MainNoData>
                </>
            ) : (
                <>
                    <MainNoData>
                        <Notification>
                            <NotificationImage src="/Notification.svg" alt="Notification" />
                            <NotificationTitle>Your photos will drop soon.</NotificationTitle>
                            <NotificationMessage>
                                You will get a message when they are ready. It can take up to 48
                                hours.
                            </NotificationMessage>
                        </Notification>
                        <ArtsContainer>
                            <ArtsTitle>Browse Artist Prints</ArtsTitle>
                            <SwiperContainer
                                slidesPerView={'auto'}
                                spaceBetween={30}
                                slidesOffsetAfter={10}
                                freeMode={true}
                                modules={[FreeMode]}
                            >
                                {ArtPrints.map((e: Art) => (
                                    <Slide key={e.index}>
                                        <ArtButton>
                                            <Art src={e.src}></Art>
                                        </ArtButton>
                                    </Slide>
                                ))}
                            </SwiperContainer>
                        </ArtsContainer>
                    </MainNoData>
                </>
            )}
            {/* <Footer /> */}
        </Container>
    );
};
