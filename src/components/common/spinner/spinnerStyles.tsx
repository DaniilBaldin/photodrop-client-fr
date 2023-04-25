import styled from 'styled-components';

export const SpinnerAnimation = styled.div`
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-left: 12px;
    margin-bottom: 3px;

    :after {
        content: ' ';
        display: block;
        width: 18px;
        height: 18px;

        /* margin: 8px; */
        border-radius: 50%;
        border: 4px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
