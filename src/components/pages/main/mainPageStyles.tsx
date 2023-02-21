import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';

export const Container = styled.main`
    /* max-width: 1230px; */
    width: 100%;
    /* height: 90%; */
    /* padding: 0 15px; */
    /* margin: 0 auto; */

    /* overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    /* overflow-y: auto; */
    /* width: 100%; */

    @media (max-width: 1024px) {
        zoom: 80%;
    }

    @media (max-width: 320px) {
        zoom: 70%;
    }
`;

export const MainNoData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* padding-top: 20px; */
    width: 100%;

    @media (max-width: 1440px) {
        zoom: 90%;
    }

    @media (max-width: 320px) {
        zoom: 70%;
    }
`;

export const Notification = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    /* height: 100px; */
`;

export const NotificationImage = styled.img`
    width: 82px;
    height: 75px;
`;

export const NotificationTitle = styled.h2`
    font-family: 'Futura PT';
    font-size: 30px;
    font-weight: 500;
    line-height: 38px;
    margin: 0;
`;

export const NotificationMessage = styled.p`
    font-family: 'Futura PT';
    font-size: 22px;
    font-weight: 400;
    line-height: 28px;
    margin: 0;
`;

export const ArtsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    width: 100%;
    padding-left: 30px;
    /* height: 500px; */
    margin-bottom: 40px;

    @media (max-width: 1440px) {
        height: 300px;
    }

    @media (max-width: 320px) {
        height: 300px;
    }
`;

export const ArtsTitle = styled.h2`
    font-family: 'Futura PT';
    font-size: 30px;
    font-weight: 500;
    line-height: 38px;
    margin: 0;
    margin-left: 100px;
`;

export const SwiperContainer = styled(Swiper)`
    height: 100%;
    width: 80%;
    margin-left: 100px;
`;

export const Slide = styled(SwiperSlide)`
    height: 300px;
    width: 200px;
    margin: 0;
`;

export const ArtButton = styled.button`
    padding: 0;
    margin: 0;
    margin-right: 20px;
    width: 200px;
    height: 301px;
    border-radius: 30px;
    border: none;
    object-fit: cover;
`;

export const Art = styled.img`
    width: 200px;
    height: 301px;
    border-radius: 20px;
`;
