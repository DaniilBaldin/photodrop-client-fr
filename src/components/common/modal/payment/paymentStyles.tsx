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
    transition: all 0.1s ease-in-out;
    pointer-events: ${(props) => (props.show ? 'all' : 'none')};
    z-index: 999;

    @media (max-width: 1024px) {
        zoom: 70%;
    }

    @media (max-width: 320px) {
        zoom: 70%;
    }
`;

export const ModalContent = styled.div`
    width: 480px;
    height: 185px;
    margin-top: 250px;
    background-color: white;
    transform: translateY(-200px);
    border-radius: 20px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    margin-bottom: 0px;
`;

export const Text = styled.div`
    text-align: left;
    font-family: 'Termina';
    font-size: 22px;
    font-weight: 700;
    line-height: 27px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
`;

export const CloseButton = styled.button`
    border: none;
    height: 27px;
    width: 22px;
    margin-top: 18px;
    margin-left: 20px;
    margin-right: 70px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Body = styled.div`
    display: grid;
    grid-template-columns: 350px 80px;
    padding-top: 15px;
    padding-left: 20px;
    padding-right: 20px;
    gap: 60px;
`;

export const TextPlain = styled.p`
    text-align: left;
    font-family: 'Futura PT';
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    margin: 0;
`;

export const TextBold = styled.span`
    text-align: left;
    font-family: 'Futura PT';
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
    margin: 0;
`;

export const CheckoutButton = styled.button`
    width: 440px;
    height: 50px;
    border-radius: 50px;
    border: 1px solid #3300cc;
    background-color: #3300cc;
    margin-left: 20px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.h2`
    text-align: center;
    font-family: 'Futura PT';
    font-size: 22px;
    font-weight: 500;
    line-height: 28px;
    color: #ffffff;
`;

export const SpinnerAnimation = styled.div`
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-left: 12px;
    margin-bottom: 6px;

    :after {
        content: ' ';
        display: block;
        width: 14px;
        height: 14px;

        /* margin: 8px; */
        border-radius: 50%;
        border: 6px solid #fff;
        border-color: #fff transparent #fff transparent;
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
