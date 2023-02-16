import styled from 'styled-components';

export const Main = styled.div`
    overflow-x: hidden;

    @media (max-width: 1024px) {
        zoom: 80%;
    }

    @media (max-width: 320px) {
        zoom: 70%;
    }
`;

export const LoginMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
    flex-direction: row;
    align-items: center;
    justify-content: left;
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
    align-items: center;
    color: #6d6d6d;
    margin: 0px;
`;
