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

export const SettingsButton = styled.button<{ path: string; selfie: string }>`
    position: absolute;
    right: 38px;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    border: none;
    background-image: ${(props) =>
        props.selfie ? `url(${props.selfie})` : `url(${'/avatar.png'})`};
    background-repeat: no-repeat;
    background-size: cover;
    display: ${(props) => (props.path === '/' ? 'flex' : 'none')};

    @media (max-width: 480px) {
        height: 30px;
        width: 30px;
        display: ${(props) =>
            props.path === '/terms' || props.path === '/privacy' || props.path === '/'
                ? 'flex'
                : 'none'};
    }
`;

export const BackButton = styled.button`
    position: absolute;
    left: 38px;
    height: 40px;
    width: 40px;
    border: none;
    background-color: transparent;

    @media (max-width: 480px) {
        height: 30px;
        width: 30px;
    }
`;
