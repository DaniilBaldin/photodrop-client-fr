import styled from 'styled-components';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Container = styled.div`
    overflow-x: hidden;
    height: 100%;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;

    @media (max-width: 1024px) {
        zoom: 90%;
    }

    @media (max-width: 600px) {
        zoom: 80%;
    }
    @media (max-width: 350px) {
        zoom: 70%;
    }
`;
export const Main = styled.div`
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    align-items: normal;
    -webkit-align-items: normal;
    justify-content: left;
    -webkit-justify-content: left;
    height: 100%;
    margin-top: 150px;
    width: 430px;

    @media (max-width: 600px) {
        margin-top: 30px;
    }
`;

export const Title = styled.h1`
    font-family: 'Termina';
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    color: #262626;
    margin: 40px 0 33px 0;
`;

export const SubTitle = styled.h2`
    font-family: 'Futura PT';
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    color: #262626;
    text-align: left;
    margin: 0 0 10px 0;
`;

export const Avatar = styled.div`
    position: relative;
    width: 140px;
    height: 140px;
    margin-bottom: 20px;
`;

export const Img = styled(LazyLoadImage)`
    width: 140px;
    height: 140px;
    /* display: inline-block; */
    border-radius: 50%;
    border: 1px solid white;
    z-index: 1;
`;

export const ChangeSelfie = styled.button`
    position: absolute;
    left: 110px;
    top: 98px;
    width: 43px;
    height: 43px;
    color: #ffffff;
    background-color: #3300cc;
    border: 2px solid #ffffff;
    border-radius: 50%;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
`;

export const PencilImage = styled.img`
    width: 17px;
    height: 23px;
    /* margin-left: 1px;
    margin-bottom: 2px; */
`;

export const ChangeName = styled.button`
    width: 420px;
    height: 53px;
    border-radius: 10px;
    border: 1px solid #ceccb5;
    background-color: #ffffff;
    margin-top: 20px;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    align-items: left;
    -webkit-align-items: left;
    justify-content: left;
    -webkit-justify-content: left;
`;

export const ButtonTitle = styled.h2`
    font-family: 'Futura PT';
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #262626;
    text-align: left;
    margin: 5px 0px 0px 15px;
    text-decoration: none;

    @media (max-width: 425px) {
        font-size: 14px;
    }
`;

export const ButtonText = styled.p`
    text-align: left;
    font-family: 'Futura PT';
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: #262626;
    margin: 2px 0px 0px 15px;
    text-decoration: none;

    @media (max-width: 425px) {
        font-size: 14px;
    }
`;

export const ArrowRight = styled(ArrowForwardIosIcon)`
    position: relative;
    top: -32px;
    left: 380px;
    color: #262626;
    height: 20px;
    width: 20px;

    @media (max-width: 425px) {
        left: 370px;
    }
`;

export const ChangeNameLink = styled(Link)`
    text-decoration: none;
`;
