import React, { FC } from 'react';

import { Input } from './InputStyles';

type Props = {
  dialCode: string;
};

export const PhoneInput: FC<Props> = (props) => {
  return <Input type="text" required autoComplete="off" value={props.dialCode} />;
};
