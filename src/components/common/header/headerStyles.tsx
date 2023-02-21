import styled from 'styled-components';

export const Header = styled.header`
    border-bottom: 1px solid #f1f0ec;
    padding: 20px 0 18px 0;
`;

export const HeaderMain = styled.div`
    display: flex;
    width: 100%;
    max-width: 1230px;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    margin: 0 auto;
`;

export const Image = styled.img`
    height: 16px;
    width: 125px;

    @media (min-width: 1024px) {
        height: 22px;
        width: 179px;
    }
`;

export const SettingsButton = styled.button`
    position: absolute;
    right: 38px;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    border: none;
    background-color: #eeeeee;

    @media (max-width: 480px) {
        height: 30px;
        width: 30px;
    }
`;
