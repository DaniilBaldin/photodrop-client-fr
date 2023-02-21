import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const FooterMain = styled.footer`
    /* position: absolute; */
    /* bottom: 0px; */
    /* height: 360px; */
    width: 100%;
    background-color: #262626;
    padding-top: 30px;
    padding-left: 400px;
    padding-right: 320px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (max-width: 1440px) {
        height: 400px;
        padding-left: 300px;
        padding-right: 300px;
    }

    @media (max-width: 1024px) {
        zoom: 90%;
        padding-left: 50px;
        padding-right: 50px;
        /* padding-right: 0px; */
        height: 480px;
    }

    @media (max-width: 1024px) {
        zoom: 90%;
        padding-left: 50px;
        padding-right: 50px;
        /* padding-right: 0px; */
        height: 480px;
    }

    @media (max-width: 320px) {
        zoom: 80%;
        padding-left: 50px;
        padding-right: 50px;
        /* padding-right: 0px; */
        height: 480px;
    }
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: center;
    margin: 0;
    padding-left: 80px;
    /* max-width: 80%; */
    gap: 50px;

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        justify-content: left;
        padding-left: 0px;
        max-width: 100%;
        zoom: 90%;
    }

    @media (max-width: 320px) {
        flex-direction: column;
        align-items: center;
        justify-content: left;
        padding-left: 0px;
        max-width: 100%;
        zoom: 80%;
    }
`;

export const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: left;
    width: 100%;

    @media (max-width: 1024px) {
        width: 80%;
    }

    @media (max-width: 320px) {
        width: 100%;
    }
`;

export const FooterTitle = styled.h2`
    font-size: 18px;
    font-family: 'Termina';
    letter-spacing: -0.02em;
    font-weight: 700;
    line-height: 22px;
    margin: 0 0 10px 0;
    color: #ffffff;
`;

export const FooterLogo = styled.img`
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const StyledText = styled.p`
    letter-spacing: -0.02em;
    color: #ffffff;
    margin-top: 20px;
    font-family: 'Futura PT';
    font-size: 18px;
    font-weight: 400;
`;

export const FrameButton = styled.button`
    width: 300px;
    height: 50px;
    border-radius: 50px;
    color: #ffffff;
    background-color: transparent;
    border: 1px solid #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
`;

export const ButtonText = styled.p`
    font-family: 'Futura PT';
    font-size: 22px;
    font-weight: 500;
    line-height: 22px;
`;

export const DateText = styled.div`
    font-family: 'Futura PT';
    font-size: 18px;
    font-weight: 400;
    line-height: 36px;
    color: #ffffff;
    margin-top: 40px;
`;

export const MailText = styled.p`
    letter-spacing: -0.02em;
    color: #ffffff;
    font-family: 'Futura PT';
    font-size: 18px;
    font-weight: 400;
    margin-top: -2px;
    margin-bottom: 10px;
`;

export const MailLink = styled.a`
    letter-spacing: -0.02em;
    color: #ffffff;
    font-family: 'Futura PT';
    font-size: 18px;
    font-weight: 400;
    text-decoration: none;
`;

export const TermsLinks = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const TermsLink = styled(Link)`
    letter-spacing: -0.02em;
    color: #ffffff;
    font-family: 'Futura PT';
    font-size: 18px;
    font-weight: 400;
    text-decoration: none;
`;
