import styled from 'styled-components';

export const Main = styled.div`
    /* max-width: 1230px; */
    overflow-x: hidden;
    height: 100%;

    @media (max-width: 1024px) {
        zoom: 80%;
    }

    @media (max-width: 320px) {
        zoom: 70%;
    }
`;

export const SelfieMain = styled.div`
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
    -webkit-align-items: center;
    justify-content: left;
    -webkit-justify-content: left;
    height: 100%;
`;

export const SelfieDiv = styled.div`
    margin-top: 177px;
    width: 430px;
`;

export const TextTitle = styled.h1`
    line-height: 36px;
    font-family: 'Termina', sans-serif;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    margin: 0 0 30px 0;
`;

export const Text = styled.div`
    text-align: left;
    font-family: 'Futura PT';
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    margin: 0px 0px 0px 5px;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    align-items: center;
    -webkit-align-items: center;
    justify-content: left;
    -webkit-justify-content: left;
`;

export const ImageBox = styled.div`
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
    margin-top: 28px;
`;

export const Button = styled.button`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: flex;
    display: -webkit-lex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
    border: 1px solid #3300cc;
    background-color: #3300cc;
    color: white;
    margin-top: -41px;
    margin-left: 140px;
`;
