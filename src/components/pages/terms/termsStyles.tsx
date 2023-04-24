import styled from 'styled-components';

export const Container = styled.main`
    max-width: 700px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
`;

export const Main = styled.div`
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    align-items: stretch;
    -webkit-align-items: stretch;
    justify-content: left;
    -webkit-justify-content: left;
`;

export const Title = styled.h1`
    font-family: 'Termina';
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    margin: 40px 0 15px 0;
`;

export const SubTitle = styled.h2`
    font-family: 'Futura PT';
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: -2%;
    color: #262626;
    text-align: left;
    margin: 0 0 10px 0;
`;

export const TextBold = styled.span`
    font-family: 'Futura PT';
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: -2%;
    color: #262626;
    text-align: left;
    margin: 0 0 10px 0;
`;

export const Text = styled.p`
    font-family: 'Futura PT';
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: -2%;
    color: #262626;
    text-align: justify;
    margin: 0 0 30px 0;
`;
