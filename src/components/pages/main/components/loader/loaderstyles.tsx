import styled from 'styled-components';

export const LoaderMain = styled.div`
    /* position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--main-bg);
    z-index: 999;
`;

export const Image = styled.img`
    width: 75px;
    height: auto;
`;

export const Text = styled.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
    margin: 20px 0 0 0;
`;
