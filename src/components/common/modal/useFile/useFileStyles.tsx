import styled from 'styled-components';

export const Modal = styled.div<{ show: boolean }>`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
    opacity: ${(props) => (props.show ? 1 : 0)};
    transition: all 0.1s ease-in-out;
    pointer-events: ${(props) => (props.show ? 'all' : 'none')};
    z-index: 999;

    @media (max-width: 1440px) {
        zoom: 90%;
    }

    @media (max-width: 425px) {
        zoom: 100%;
    }
    @media (max-width: 330px) {
        zoom: 90%;
    }
`;

export const ModalContent = styled.div`
    width: 379px;
    height: 653px;
    margin-top: 250px;
    background-color: #262626;
    transform: translateY(-200px);
    border-radius: 20px;

    @media (max-width: 425px) {
        width: 100%;
        margin-top: 400px;
        height: 100%;
        border-radius: 0px;
    }
`;

export const FileWindow = styled.span`
    position: absolute;
    top: 210px;
    left: 50px;
    right: 0;
    bottom: 0px;
    max-width: 260px;
    max-height: 260px;
    border-radius: 50%;
    overflow: hide;
    mask-image: '';
    -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);

    @media (max-width: 425px) {
        left: calc(100% / 5.5);
        right: calc(100% / 9);
    }
    @media (max-width: 400px) {
        left: calc(100% / 6);
        right: calc(100% / 8);
    }

    @media (max-width: 320px) {
        left: calc(100% / 8);
        right: calc(100% / 8);
    }
`;

export const Header = styled.div`
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    align-items: center;
    -webkit-align-items: center;
    justify-content: left;
    -webkit-justify-content: left;
`;

export const Text = styled.div`
    text-align: left;
    font-family: 'Futura PT';
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
    margin-top: 16px;
    display: flex;
    display: -webkit-flex;
    color: #ffffff;
    flex-direction: row;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
`;

export const CloseButton = styled.button`
    border: none;
    height: 30px;
    width: 30px;
    margin-top: 16px;
    margin-left: 7px;
    margin-right: 115px;
    color: white;
    background-color: #262626;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;

    @media (max-width: 425px) {
        margin-right: 30%;
    }
`;

export const TextSmall = styled.div`
    text-align: left;
    font-family: 'Futura PT';
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    margin-top: 110px;
    margin-right: 10px;
    margin-bottom: 400px;
    display: flex;
    display: -webkit-flex;
    color: #ffffff;
    flex-direction: row;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;

    @media (max-width: 425px) {
        /* margin-left: 1%; */
    }
`;

export const Footer = styled.div`
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    align-items: center;
    -webkit-align-items: center;
    justify-content: left;
    -webkit-justify-content: left;

    @media (max-width: 425px) {
        margin-left: 5%;
        margin-right: -3%;
    }

    @media (max-width: 399px) {
        margin-left: 2%;
        margin-right: -2%;
    }

    @media (max-width: 375px) {
        margin-left: -1%;
        margin-right: 1%;
    }
`;

export const Button = styled.button`
    border: 1px solid #ffffff;
    color: #ffffff;
    margin-left: 15px;
    width: 170px;
    height: 50px;
    border-radius: 50px;
    background-color: transparent;
    font-family: 'Futura PT';
    font-weight: 580;
    font-size: 18px;
    line-height: 23px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
`;

export const ButtonColored = styled.button`
    border: none;
    margin-left: 10px;
    width: 170px;
    height: 50px;
    border-radius: 50px;
    border: 1px solid #ffffff;
    color: #262626;
    background-color: #ffffff;
    font-family: 'Futura PT';
    font-weight: 580;
    font-size: 18px;
    line-height: 23px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
`;

export const CropStyle = {
    border: '1px solid #262626',
};

export const SpinnerAnimation = styled.div`
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-left: 12px;
    margin-bottom: 3px;

    :after {
        content: ' ';
        display: block;
        width: 18px;
        height: 18px;

        /* margin: 8px; */
        border-radius: 50%;
        border: 4px solid #262626;
        border-color: #262626 transparent #262626 transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
