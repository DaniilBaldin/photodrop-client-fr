import styled from 'styled-components';

export const Modal = styled.div<{ show: boolean }>`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${(props) => (props.show ? 1 : 0)};
    transition: all 0.3s ease-in-out;
    pointer-events: ${(props) => (props.show ? 'all' : 'none')};

    @media (max-width: 1024px) {
        zoom: 80%;
    }

    @media (max-width: 320px) {
        zoom: 70%;
    }
`;

export const ModalContent = styled.div`
    width: 379px;
    height: 653px;
    margin-top: 250px;
    background-color: #262626;
    transform: translateY(-200px);
    border-radius: 20px;
`;

export const FileWindow = styled.span`
    position: absolute;
    top: 210px;
    left: 50px;
    right: 0;
    bottom: 0px;
    max-width: 280px;
    max-height: 260px;
    border-radius: 50%;
    overflow: hide;
    mask-image: '';
    -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
`;

export const Text = styled.div`
    text-align: left;
    font-family: 'Futura PT';
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
    margin-top: 16px;
    display: flex;
    color: #ffffff;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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
    align-items: center;
    justify-content: center;
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
    color: #ffffff;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
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
    align-items: center;
    justify-content: center;
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
    align-items: center;
    justify-content: center;
`;

export const CropStyle = {
    border: '1px solid #262626',
};
