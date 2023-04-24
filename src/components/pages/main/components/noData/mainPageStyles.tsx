import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';

export const Container = styled.main`
    max-width: 1230px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
`;

export const MainNoData = styled.div`
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
`;

export const Notification = styled.div`
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
`;

export const NotificationImage = styled.img`
    width: 110px;
    height: 100px;
    display: block;
    margin: 40px auto 30px auto;

    @media (max-width: 1024px) {
        width: 82px;
        height: 75px;
        margin: 20px auto 20px auto;
    }
`;

export const NotificationTitle = styled.h2`
    font-family: 'Futura PT';
    font-size: 30px;
    font-weight: 500;
    line-height: 38px;
    margin: 0 0 19px 0;

    @media (max-width: 1024px) {
        font-size: 22px;
        line-height: 28px;
        margin: 0 0 16px 0;
    }
`;

export const NotificationMessage = styled.p`
    font-family: 'Futura PT';
    font-size: 22px;
    font-weight: 400;
    line-height: 28px;
    margin: 0 0 60px 0;
    text-align: center;

    @media (max-width: 1024px) {
        font-size: 18px;
        line-height: 23px;
        margin: 0 0 41px 0;
    }
`;

export const ArtsContainer = styled.div`
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    align-items: left;
    -webkit-align-items: left;
    justify-content: left;
    -webkit-justify-content: left;
    width: 100%;
`;

export const ArtsTitle = styled.h2`
    font-family: 'Futura PT';
    font-size: 30px;
    font-weight: 500;
    line-height: 38px;
    margin: 0 0 28px 0;

    @media (max-width: 1024px) {
        font-size: 22px;
        line-height: 28px;
        margin: 41px 0 21px 0;
    }
`;

export const SwiperContainer = styled(Swiper)`
    height: 100%;
    width: 100%;
    margin-left: 0px;
    margin-bottom: 40px;

    @media (max-width: 1024px) {
        width: 100%;
        margin-right: 0;
    }
`;

export const Slide = styled(SwiperSlide)`
    height: 260px;
    width: 200px;
    margin: 0;
`;

export const ArtButton = styled.button`
    padding: 0;
    margin: 0;
    margin-right: 5px;
    width: 200px;
    height: 260px;
    border-radius: 30px;
    border: none;
    object-fit: cover;
`;

export const Art = styled.img`
    width: 200px;
    height: 260px;
    border-radius: 20px;
`;
