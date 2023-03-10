import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1230px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
`;

export const PhotosContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    width: 100%;
`;

export const Photos = styled.div`
    display: grid;
    grid-template-columns: 400px 400px 400px;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
        grid-template-columns: 110px 110px 110px;
    }
`;

export const ImageButton = styled.button<{ image: string }>`
    width: 400px;
    height: 400px;
    border: none;
    margin: 0;
    background-image: ${(props) => (props.image ? `url(${props.image})` : `url(${'/avatar.png'})`)};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 1024px) {
        width: 110px;
        height: 110px;
    }
`;

export const ButtonContainer = styled.div`
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
        margin-top: 50px;
        margin-bottom: 50px;
    }
`;

export const UnlockButton = styled.button<{ show: boolean }>`
    width: 300px;
    height: 50px;
    border: 1px solid #3300cc;
    background-color: #3300cc;
    border-radius: 50px;
    display: ${(props) => (!props.show ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;

    @media (max-width: 1024px) {
        width: 345px;
    }
`;

export const ButtonText = styled.h2`
    color: #ffffff;
    font-family: 'Futura PT';
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    text-align: center;
    margin: 0;

    @media (max-width: 1024px) {
        font-size: 18px;
        line-height: 23px;
    }
`;
