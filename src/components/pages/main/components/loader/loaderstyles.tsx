import styled from 'styled-components';

export const LoaderMain = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    -webkit-justify-content: center;
    align-items: center;
    -webkit-align-items: center;
    position: fixed;
    background-color: hsla(0, 0%, 100%, 0.98);
    z-index: 1;
`;

export const Image = styled.img`
    width: 75px;
    height: auto;
`;

export const Spinner = styled.div`
    width: 64px;
    height: 64px;
    border: 8px solid;
    border-color: #3d5af1 transparent #3d5af1 transparent;
    border-radius: 50%;
    animation: spin-anim 1.2s linear infinite;

    @keyframes spin-anim {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export const Text = styled.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
    margin: 20px 0 0 0;
`;
