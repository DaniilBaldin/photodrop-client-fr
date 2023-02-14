import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { countries } from '~/utils/countries';

import { Modal, ModalMain, Header, Body, CountryButton, CloseButton } from './modalStyles';

import CloseIcon from '@mui/icons-material/Close';

type Props = {
  show: boolean;
  onClose: () => void;
  setCountry: React.Dispatch<React.SetStateAction<Country>>;
};

type Country = {
  name: string;
  dial_code: string;
  code: string;
};

export const CountriesModal = (props: Props) => {
  const closeOnEscapeKeyDown = (e: { charCode: number; keyCode: number }) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanUp() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);

  return createPortal(
    <Modal onClick={props.onClose} show={props.show}>
      <ModalMain>
        <Header onClick={(e) => e.stopPropagation()}>
          <h2>Select country</h2>
          <CloseButton onClick={props.onClose}>
            <CloseIcon />
          </CloseButton>
        </Header>
        <Body>
          {countries.map((e: Country) => (
            <CountryButton
              key={e.code}
              onClick={() => {
                props.setCountry(e);
                props.onClose;
              }}
            >
              <img src={`/flags/${e.code.toLowerCase()}.svg`} alt={e.name} height="16" width="24" loading="lazy" />
              {e.name}
            </CountryButton>
          ))}
        </Body>
      </ModalMain>
    </Modal>,
    document.getElementById('root') as HTMLElement,
  );
};
