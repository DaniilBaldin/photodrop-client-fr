import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const FooterMain = styled.footer`
    padding: 60px 0 30px 0;
    background-color: #262626;
    width: 100%;
`;

export const FooterContainer = styled.div`
    max-width: 375px;
    padding: 0;
    margin: 0 auto;

    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: 1.4fr 1fr;
        gap: 60px;
        max-width: 965px;
        /* padding: 0; */
    }

    @media (max-width: 400px) {
        zoom: 90%;
    }
`;

export const FooterColumn = styled.div`
    margin-left: 40px;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: left;
    -webkit-justify-content: left;

    @media (max-width: 1024px) {
        margin-left: 0;
        justify-content: center;
        -webkit-justify-content: center;
    }
`;

export const FooterTitle = styled.h2`
    font-size: 22px;
    font-family: 'Termina';
    font-weight: 700;
    line-height: 26px;
    margin: 0 0 16px 0;
    color: #ffffff;

    @media (max-width: 1024px) {
        font-size: 18px;
        line-height: 22px;
        margin: 0 0 10px 0;
    }
`;

export const FooterLogo = styled.img`
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const StyledText = styled.p`
    color: #ffffff;
    margin-top: 20px;
    font-family: 'Futura PT';
    font-size: 18px;
    font-weight: 400;
    text-align: left;

    @media (max-width: 1024px) {
        font-size: 16px;
        line-height: 21px;
        letter-spacing: -2%;
        margin-top: 10px;
    }
`;

export const FrameButton = styled.button`
    width: 300px;
    height: 50px;
    border-radius: 50px;
    color: #ffffff;
    padding: 0;
    background-color: transparent;
    border: 1px solid #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;

    @media (max-width: 1024px) {
        width: 345px;
        /* margin-left: 10px; */
    }
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
    margin: 30px 0 20px 0;
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
