import React from 'react';
import { HeaderMain, Image } from './headerStyles';

export const Header = () => {
  return (
    <HeaderMain>
      <Image src="/logo.svg" alt="Logo" />
    </HeaderMain>
  );
};
