import styled from 'styled-components';

export const Modal = styled.div<{ show: boolean }>`
    position: fixed;
    left: 0;
    right: -20px;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
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
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
    -webkit-align-items: center;
    justify-content: top;
    -webkit-justify-content: top;
`;

export const Header = styled.div`
    display: flex;
    display: -webkit-flex;
    /* flex-direction: row; */
    align-items: center;
    -webkit-align-items: center;
    justify-content: right;
    -webkit-justify-content: right;
`;

export const CloseButton = styled.button`
    border: none;
    margin-left: 110px;
    background-color: white;
    color: #262626;
`;

export const Div = styled.div`
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    overflow-y: auto;

    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */

    ::-webkit-scrollbar {
        display: none;
    }
`;

export const Aside = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    height: 100%;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
    -webkit-align-items: center;
    justify-content: top;
    -webkit-justify-content: top;
    /* align-self: flex-start; */
`;

export const Body = styled.div`
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    height: 100%;
    align-items: flex-start;
    -webkit-align-items: flex-start;
`;

export const CountryButton = styled.button`
    width: 400px;
    height: 50px !important;
    background-color: white;
    color: #262626;
    border-left: 0px;
    border-right: 0px;
    border-top: 1px solid #eeeeee;
    border-bottom: 0px;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    align-items: center;
    -webkit-align-items: center;
    justify-content: left;
    -webkit-justify-content: left;
    gap: 10px;
    font-size: 17px;
    line-height: 50px;
    padding: 0;
`;

export const LetterButton = styled.button`
    border: none;
    background-color: white;
    height: 30px;
    width: 30px;
    font-size: 15px;
    margin-bottom: 5px;
    color: #262626;
`;

export const Title = styled.h2`
    margin: 0;
    margin-left: 40px;
    margin-bottom: 10px;
    font-family: 'Futura PT';
`;
