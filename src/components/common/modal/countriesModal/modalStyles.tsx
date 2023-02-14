import styled from 'styled-components';

export const Modal = styled.div<{ show: boolean }>`
  position: fixed;
  left: 0;
  right: -20px;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: all 0.3s ease-in-out;
  pointer-events: ${(props) => (props.show ? 'all' : 'none')};
  overflow: hidden;
  overflow-y: scroll;
`;

export const ModalMain = styled.div`
  width: 400px;
  background-color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
`;

export const CloseButton = styled.button`
  border: none;
  margin-left: 110px;
  background-color: white;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
`;

export const CountryButton = styled.button`
  width: 400px;
  height: 40px;
  background-color: white;
  border-left: 0px;
  border-right: 0px;
  border-top: 1px solid #eeeeee;
  border-bottom: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
`;
