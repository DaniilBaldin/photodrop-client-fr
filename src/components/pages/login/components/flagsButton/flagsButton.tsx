import React, { FC, useEffect, useState } from 'react';

import { CountriesModal } from '~/components/common/modal/countriesModal/countriesModal';

import { Button } from './ButtonStyles';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type Props = {
  code?: (code: string) => void;
};

type Country = {
  name: string;
  dial_code: string;
  code: string;
};

export const FlagsButton: FC<Props> = (props) => {
  const [show, setShow] = useState<boolean>(false);

  const [country, setCountry] = useState<Country>({
    name: 'United States',
    dial_code: '+1',
    code: 'US',
  });

  useEffect(() => {
    props.code?.(country.dial_code);
  }, [country]);

  return (
    <div>
          <Button type="button" onClick={() => {
              setShow(true)
      }}>
        <img src={`/flags/${country.code.toLowerCase()}.svg`} alt="Flag" height="20" width="28" loading="lazy" />
        <ExpandMoreIcon />
      </Button>
      <CountriesModal onClick={()=>{setShow(false)} show={show}}></CountriesModal>
    </div>
  );
};
