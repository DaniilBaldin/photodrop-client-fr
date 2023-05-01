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
