import styled from 'styled-components';

export const Modal = styled.section<{ show: boolean }>`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.9);
    opacity: ${(props) => (props.show ? 1 : 0)};
    transition: all 0.1s ease-in-out;
    pointer-events: ${(props) => (props.show ? 'all' : 'none')};
    z-index: 999;
    overflow-y: hidden;
`;

export const ModalMain = styled.div`
    max-width: 1200px;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr;
    margin: 0 auto;
    padding: 0 15px;

    @media (max-width: 1024px) {
        height: 100%;
        grid-template-rows: auto 1fr auto;
        padding: 22px 0 30px 0;
    }
`;

export const Image = styled.img`
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    max-height: 90%;
    width: auto;
    height: auto;
    object-fit: cover;
`;

export const CloseButton = styled.button`
    background-color: transparent;
    border: none;
    color: #ffffff;
    font-size: 22px;
    padding: 0;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
    margin-top: 20px;
    margin-left: 30px;
`;

export const ButtonContainer = styled.div`
    position: absolute;
    display: flex;
    display: -webkit-flex;
    justify-content: flex-end;
    -webkit-justify-content: flex-end;
    align-items: center;
    -webkit-align-items: center;
    gap: 20px;
    margin-right: 30px;
    right: 45%;
    left: 40%;
    bottom: 30px;
    padding: 0;
    z-index: 12;

    @media (max-width: 1024px) {
        display: flex;
        display: -webkit-flex;
        justify-content: center;
        -webkit-justify-content: center;
        align-items: center;
        -webkit-align-items: center;
        right: 0%;
        left: 0%;
        margin-left: 25px;
    }
`;

export const UnlockButton = styled.button`
    width: 200px;
    height: 50px;
    padding: 0;
    border-radius: 50px;
    border: 1px solid #ffffff;
    color: #262626;
    background-color: #ffffff;
    font-family: 'Futura PT';
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    text-align: center;

    @media (max-width: 1024px) {
        width: 345px;
        font-size: 18px;
        line-height: 23px;
    }
`;

export const BottomButtons = styled.div`
    position: absolute;
    display: flex;
    display: -webkit-flex;
    justify-content: flex-end;
    -webkit-justify-content: flex-end;
    align-items: center;
    -webkit-align-items: center;
    gap: 20px;
    margin-right: 30px;
    right: 0;
    left: 80%;
    bottom: 30px;
    padding: 0;
    z-index: 12;

    @media (max-width: 1024px) {
        display: flex;
        display: -webkit-flex;
        justify-content: flex-end;
        -webkit-justify-content: flex-end;
        align-items: center;
        -webkit-align-items: center;
        padding: 0 15px;
        margin-right: 10px;
        margin-top: 30px;
    }
`;

export const DownloadButton = styled.a`
    margin-top: 5px;
    padding: 0;
    z-index: 12;
    width: 60px;
    height: 80px;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
    color: #ffffff;
    border: none;
    background-color: transparent;
    font-family: 'Futura PT';
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    text-decoration: none;

    @media (max-width: 1024px) {
        display: flex;
        display: -webkit-flex;
        justify-content: center;
        -webkit-justify-content: center;
        align-items: center;
        -webkit-align-items: center;
        padding: 0 15px;
    }
`;

export const FrameButton = styled.button`
    width: 201px;
    height: 50px;
    border-radius: 50px;
    padding: 0;
    border: 1px solid #ffffff;
    color: #ffffff;
    background-color: transparent;
    font-family: 'Futura PT';
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    text-align: center;

    @media (max-width: 1024px) {
        font-size: 18px;
        line-height: 23px;
        min-width: 196px;
        /* margin-top: 40px; */
    }
`;

export const ArrowDown = styled.img`
    margin-bottom: 5px;
`;

export const Gradient = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.75) 44.34%, rgba(0, 0, 0, 0) 100%);
    z-index: 11;

    @media (max-width: 600px) {
        display: none;
    }
`;
