import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Main = styled.div`
    overflow-x: hidden;
    height: 100%;

    @media (max-width: 1024px) {
        zoom: 80%;
    }

    @media (max-width: 320px) {
        zoom: 70%;
    }
`;

export const LoginMain = styled.div`
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
    -webkit-align-items: center;
    justify-content: left;
    -webkit-justify-content: left;
    height: 100%;
`;

export const LoginDiv = styled.div`
    margin-top: 177px;
    width: 430px;
`;

export const TextTitle = styled.h1`
    line-height: 36px;
    font-family: 'Termina', sans-serif;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    margin: 0 0 20px 0;
`;

export const TextPhone = styled.p`
    text-align: left;
    font-family: 'Futura PT';
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
    margin: 30px 0px 0px 5px;
`;

export const LoginForm = styled.form`
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    align-items: center;
    -webkit-align-items: center;
    justify-content: left;
    -webkit-justify-content: left;
`;

export const CreateButton = styled.button`
    font-family: 'Futura PT';
    font-size: 22px;
    font-weight: 500;
    color: #ffffff;
    width: 420px;
    height: 50px;
    border-radius: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
    border: 1px solid #3300cc;
    background-color: #3300cc;

    :disabled {
        background-color: #c59fe1;
        border: 1px solid #c59fe1;
        cursor: auto;
    }
`;

export const TextBottom = styled.p`
    font-size: 16px;
    line-height: 20.51px;
    font-family: 'Futura PT';
    display: flex;
    display: -webkit-flex;
    max-width: 420px;
    width: 100%;
    justify-content: center;
    -webkit-justify-content: center;
    /* align-items: left;
    -webkit-align-items: left; */
    color: #6d6d6d;
    margin: 0px;
    /* text-align: left;
    -webkit-text-align: left; */

    @media (max-width: 440px) {
        font-size: 14px;
        line-height: 18px;
    }
`;

export const TermsLinks = styled.p`
    font-size: 14px;
    line-height: 20.51px;
    font-family: 'Futura PT';
    display: inline-block;
    display: -webkit-inline-block;
    justify-content: center;
    -webkit-justify-content: center;
    max-width: 420px;
    width: 100%;
    color: #6d6d6d;
    justify-content: center;
    -webkit-justify-content: center;

    @media (min-width: 440px) {
        display: none;
    }
`;

export const LinkText = styled(Link)`
    font-size: 14px;
    line-height: 20.51px;
    max-width: 420px;
    width: 100%;
    font-family: 'Futura PT';
    text-decoration: underline;
    color: #6d6d6d;
    margin: 0;

    @media (min-width: 440px) {
        display: none;
    }
`;
