import styled from 'styled-components';

export const Main = styled.section`
    overflow-x: hidden;
    height: 100%;

    @media (max-width: 1024px) {
        zoom: 80%;
    }

    @media (max-width: 320px) {
        zoom: 70%;
    }
`;

export const VerifyMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;
    height: 100%;
`;

export const VerifyDiv = styled.div`
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
    flex-direction: row;
    align-items: center;
    justify-content: left;
`;

export const TextBold = styled.p`
    text-align: left;
    font-family: 'Futura PT';
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
    margin: 0;
`;

export const I = styled.input`
    border: 1px solid #eeeeee;
    background-color: #eeeeee;
`;

export const Input = {
    width: '45px',
    height: '40px',
    border: '1px solid #eeeeee',
    backgroundColor: '#f4f4f4',
    marginRight: '30px',
    marginTop: '18px',
    borderRadius: '10px',
    fontSize: '18px',
    fontFamily: 'Futura PT',
    fontWeight: 500,
    paddingTop: '12px',
    paddingBottom: '12px',
};

export const InputFocus = {
    textDecoration: 'none',
};

export const ResendButton = styled.button`
    background-color: transparent;
    border: none;
    color: #3300cc;
    height: 13px;
    margin-top: 20px;
    width: 420px;
    font-size: 18px;
    font-family: 'Futura PT';
    font-weight: 400;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
`;

export const NextButton = styled.button`
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
