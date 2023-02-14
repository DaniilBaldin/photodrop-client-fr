import styled from 'styled-components';

export const HeaderMain = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-bottom: 1px solid #f1f0ec;
`;

export const Image = styled.img`
  height: 16px;
  width: 125px;

  @media (min-width: 1024px) {
    height: 22px;
    width: 179px;
  }
`;
