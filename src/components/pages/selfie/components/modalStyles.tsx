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
`;

export const ModalContent = styled.div`
    width: 420px;
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
`;

export const Text = styled.div`
    text-align: left;
    font-family: 'Futura PT';
    font-size: 22px;
    font-weight: 500;
    line-height: 23px;
    margin-top: 7px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
`;

export const CloseButton = styled.button`
    border: none;
    height: 27px;
    width: 22px;
    margin-top: 7px;
    margin-left: 20px;
    margin-right: 100px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
`;

export const Button = styled.button`
    border: none;
    margin-bottom: 10px;
    width: 380px;
    height: 50px;
    border-radius: 50px;
    border: 1px solid #3300cc;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TextBold = styled.p`
    font-size: 16px;
    font-family: 'Futura PT';
    font-weight: 580;
    font-size: 22px;
    line-height: 28px;
    color: #3300cc;
`;
