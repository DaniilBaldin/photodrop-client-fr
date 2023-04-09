import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';

export const ContainerWithData = styled.main`
    max-width: 1230px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
`;

export const MainWithData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Subtitle = styled.h2`
    font-family: 'Futura PT';
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
    margin: 40px 0 19px 0;
    text-align: left;

    @media (max-width: 1024px) {
        font-size: 14px;
        line-height: 18px;
        margin: 15px 0 16px 10px;
    }
`;

export const AlbumsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    width: 100%;
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
    height: 255px;
    width: 200px;
    margin: 0;

    @media (max-width: 1024px) {
        height: 140px;
        width: 110px;
    }
`;

export const AlbumButton = styled.button<{ image: string }>`
    padding: 0;
    margin: 0;
    margin-right: 5px;
    width: 200px;
    height: 255px;
    border-radius: 20px;
    border: none;
    background-image: ${(props) => (props.image ? `url(${props.image})` : `url(${'/avatar.png'})`)};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 1024px) {
        height: 140px;
        width: 110px;
    }
`;

export const ButtonText = styled.p`
    font-family: 'Futura PT';
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #ffffff;
    position: absolute;
    top: 80%;
    left: 35%;
    z-index: 200;
`;

export const Gradient = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.75) 44.34%, rgba(0, 0, 0, 0) 100%);
    border-radius: 20px;
`;

export const PhotosContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    width: 100%;
`;

export const Photos = styled.div`
    display: grid;
    grid-template-columns: 400px 400px 400px;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
        grid-template-columns: 110px 110px 110px;
    }
`;

export const ImageButton = styled.button<{ image: string }>`
    width: 400px;
    height: 400px;
    border: none;
    background-image: ${(props) => (props.image ? `url(${props.image})` : `url(${'/avatar.png'})`)};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 1024px) {
        width: 110px;
        height: 110px;
    }
`;
