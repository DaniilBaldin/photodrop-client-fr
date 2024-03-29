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

export const MainDiv = styled.div`
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
    -webkit-align-items: center;
    justify-content: left;
    -webkit-justify-content: left;
    height: 100%;
`;

export const Title = styled.h2`
    font-family: 'Termina';
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    margin-top: 40px;
    margin-bottom: 0;

    @media (max-width: 425px) {
        font-size: 18px;
        line-height: 22px;
    }
`;

export const TextPlain = styled.p`
    font-family: 'Futura PT';
    font-weight: 400;
    font-size: 22px;
    font-weight: 28px;
    text-align: left;
    color: #262626;
    max-width: 420px;
    margin-top: 20px;
    margin-bottom: 0;

    @media (max-width: 425px) {
        max-width: 380px;
        font-size: 18px;
        line-height: 23px;
    }
`;

export const TextBold = styled.span`
    font-family: 'Futura PT';
    font-weight: 700;
    font-size: 22px;
    font-weight: 28px;
    text-align: left;
    color: #262626;

    @media (max-width: 425px) {
        font-size: 18px;
        line-height: 23px;
    }
`;

export const Image = styled.img`
    width: 420px;
    height: 250px;
    border: none;
    border-radius: 20px;
    margin-top: 40px;
    margin-left: -10px;
    margin-bottom: 20px;

    @media (max-width: 425px) {
        width: 380px;
        height: 228px;
        margin-top: 30px;
    }
`;

export const Button = styled.button`
    width: 380px;
    height: 50px;
    border-radius: 50px;
    border: 1px solid #3300cc;
    background-color: #3300cc;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: -10px;
`;

export const ButtonText = styled.h2`
    font-family: 'Futura PT';
    font-size: 22px;
    font-weight: 28px;
    font-weight: 500;
    text-align: center;
    color: #ffffff;
    margin: 0;
`;

export const TextSmall = styled.p`
    font-family: 'Futura PT';
    font-size: 18px;
    font-weight: 23px;
    font-weight: 400;
    text-align: center;
    color: #262626;
    margin-top: 5px;
`;
