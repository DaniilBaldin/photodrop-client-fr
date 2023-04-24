import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    padding: 0;
    margin: 0 auto;
`;

export const PhotosContainer = styled.div`
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    align-items: left;
    -webkit-align-items: left;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    width: 100%;
`;

export const Photos = styled.div`
    display: grid;
    grid-template-columns: 400px 400px 400px;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export const ImageButton = styled.button<{ image: string }>`
    width: 400px;
    height: 400px;
    border: none;
    /* margin: 0; */
    background-image: ${(props) => (props.image ? `url(${props.image})` : `url(${'/avatar.png'})`)};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 1024px) {
        width: 100%;
        height: 33vw;
    }
`;

export const ButtonContainer = styled.div<{ show: boolean }>`
    margin-top: 100px;
    margin-bottom: 100px;
    display: ${(props) => (props.show ? `flex` : `none`)};
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

    @media (max-width: 400px) {
        width: 300px;
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
