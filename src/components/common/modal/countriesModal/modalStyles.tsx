import styled from 'styled-components';

export const Modal = styled.div<{ show: boolean }>`
    position: fixed;
    left: 0;
    right: -20px;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    opacity: ${(props) => (props.show ? 1 : 0)};
    transition: all 0.3s ease-in-out;
    pointer-events: ${(props) => (props.show ? 'all' : 'none')};
    overflow: hidden;
    overflow-y: scroll;

    @media (max-width: 1024px) {
        zoom: 80%;
    }

    @media (max-width: 320px) {
        zoom: 70%;
    }
`;

export const ModalMain = styled.div`
    width: 400px;
    background-color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
`;

export const CloseButton = styled.button`
    border: none;
    margin-left: 110px;
    background-color: white;
`;

export const Div = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Aside = styled.div`
    position: sticky;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const CountryButton = styled.button`
    width: 400px;
    height: 50px;
    background-color: white;
    border-left: 0px;
    border-right: 0px;
    border-top: 1px solid #eeeeee;
    border-bottom: 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    gap: 10px;
    font-size: 20px;
`;

export const LetterButton = styled.button`
    border: none;
    background-color: white;
    height: 25px;
    width: 25px;
    font-size: 15px;
    margin-bottom: 5px;
`;

export const Title = styled.h2`
    margin: 0;
    margin-left: 80px;
    margin-bottom: 10px;
    font-family: 'Futura PT';
`;
