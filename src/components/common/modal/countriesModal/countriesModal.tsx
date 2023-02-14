import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Modal } from './modalStyles';

type Props = {
  show: boolean;
  onClose: () => void;
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
      <div>
        <p>modal</p>
      </div>
    </Modal>,
    document.getElementById('root') as HTMLElement,
  );
};
