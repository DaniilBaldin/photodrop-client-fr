import React, { useState } from 'react';
import { Header } from '~/components/common/header/header';
import { FlagsButton } from './components/flagsButton/flagsButton';
import { PhoneInput } from './components/phoneInput/PhoneInput';

import { Main, LoginMain, LoginDiv, TextTitle, TextPhone, LoginForm, CreateButton, TextBottom } from './loginStyles';

export const Login = () => {
  const [code, setCode] = useState<string>('');

  const codeSet = (code: string) => {
    setCode(code);
  };

  return (
    <Main>
      <Header />
      <LoginMain>
        <LoginDiv>
          <TextTitle>Let’s get started</TextTitle>
          <TextPhone>Enter your phone number</TextPhone>
          <LoginForm>
            <FlagsButton code={codeSet} />
            <PhoneInput dialCode={code} />
          </LoginForm>
          <CreateButton type="button" disabled={true}>
            Create account
          </CreateButton>
          <TextBottom>By proceeding, you consent to get WhatsApp or SMS messages,</TextBottom>
          <TextBottom>from PhotoDrop and its affiliates to the number provided. Text </TextBottom>
          <TextBottom>&quot;STOP&quot; to 89203 to opt out. </TextBottom>
        </LoginDiv>
      </LoginMain>
    </Main>
  );
};
