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
        left: 20px;
    }
`;

export const HeaderAlbum = styled.header`
    border-bottom: 1px solid #f1f0ec;
    padding: 6px 0 18px 0;
    height: 60px;
`;

export const HeaderMainAlbum = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1230px;
    padding: 0;
    margin: 0;

    @media (max-width: 480px) {
        padding: 0;
        margin: 0 auto;
    }
`;

export const LocationAndDate = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    margin-left: -15%;

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: left;
        justify-content: space-between;
        margin-top: 5px;
        margin-left: -30%;
    }
`;

export const Title = styled.h2`
    font-family: 'Termina';
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    color: #262626;
    margin: 0;
    margin-right: 30px;

    @media (max-width: 480px) {
        font-size: 18px;
        line-height: 22px;
        margin: 0;
        text-align: left;
    }
`;

export const BlackText = styled.p`
    font-family: 'Futura PT';
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    color: #262626;
    /* margin: 0; */
    margin-right: 10px;

    @media (max-width: 480px) {
        font-size: 14px;
        line-height: 18px;
        margin: 0;
    }
`;

export const PurpleText = styled.p`
    font-family: 'Futura PT';
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    color: #3300cc;
    /* margin: 0; */
    margin-left: 10px;

    @media (max-width: 480px) {
        font-size: 14px;
        line-height: 18px;
        margin: 0;
    }
`;

export const DateContainer = styled.div`
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (max-width: 480px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
`;

export const UnlockButton = styled.button`
    position: absolute;
    left: 70%;
    width: 300px;
    height: 15px;
    border: none;
    background-color: transparent;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 480px) {
        display: none;
    }
`;

export const ButtonText = styled.h2`
    color: #3300cc;
    font-family: 'Futura PT';
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    text-align: right;
    margin: 0;
`;
