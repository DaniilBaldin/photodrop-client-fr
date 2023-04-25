import styled from 'styled-components';

export const Container = styled.main`
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
    margin-top: 380px;
    width: 430px;

    @media (max-width: 600px) {
        margin-top: 200px;
    }
`;

export const Title = styled.h1`
    font-family: 'Termina';
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    color: #262626;
    margin: 40px 0 20px 0;
`;

export const Input = styled.input`
    width: 420px;
    height: 40px;
    border-radius: 10px;
    background-color: #f4f4f4;
    border: 1px solid #eeeeee;
    margin: 10px 0 10px 0;
    padding: 2px 0 2px 20px;
    font-family: 'Futura PT';
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    color: #262626;

    :focus {
        border: 1px solid black;
    }
`;

export const Button = styled.button`
    width: 420px;
    height: 50px;
    border-radius: 50px;
    background-color: #3300cc;
    border: 1px solid #3300cc;
    color: #ffffff;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
    margin: 10px 0 100px 0;

    :disabled {
        background-color: #c59fe1;
        border: 1px solid #c59fe1;
        cursor: auto;
    }
`;

export const ButtonText = styled.h2`
    color: #ffffff;
    font-family: 'Futura PT';
    font-size: 22px;
    font-weight: 500;
    line-height: 28px;
    text-align: center;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
`;
