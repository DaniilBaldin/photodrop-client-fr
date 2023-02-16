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
    width: 379px;
    height: 653px;
    margin-top: 250px;
    background-color: #262626;
    transform: translateY(-200px);
    border-radius: 20px;
`;

export const WebCamWindow = styled.div`
    margin-top: 100px;
    margin-left: 90px;
    position: relative;
    /* width: 329px;
    height: 312px; */
`;
