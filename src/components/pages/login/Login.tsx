import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '~/components/common/header/header';
import { FlagsButton } from './components/flagsButton/flagsButton';
import { PhoneInput } from './components/phoneInput/PhoneInput';

import {
    Main,
    LoginMain,
    LoginDiv,
    TextTitle,
    TextPhone,
    LoginForm,
    CreateButton,
    TextBottom,
} from './loginStyles';

export const Login = () => {
    const [code, setCode] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    // const [error, setError] = useState<string>('');

    const navigate = useNavigate();

    const codeSet = (code: string) => {
        setCode(code);
    };

    const phoneSet = (phone: string) => {
        setPhone(phone);
    };

    const formSubmitHandler = (event: { preventDefault: () => void }) => {
        // TODO:Add hook to send POST request with phone number in body.
        // TODO: Error handling.
        event.preventDefault();

        console.log(phone);
        navigate('verify');
    };

    return (
        <Main>
            <Header />
            <LoginMain>
                <LoginDiv>
                    <TextTitle>Let’s get started</TextTitle>
                    <TextPhone>Enter your phone number</TextPhone>
                    <LoginForm onSubmit={formSubmitHandler}>
                        <FlagsButton code={codeSet} />
                        <PhoneInput dialCode={code} phone={phoneSet} />
                    </LoginForm>
                    <CreateButton
                        type="button"
                        disabled={!phone || phone.length <= 10}
                        onClick={formSubmitHandler}
                    >
                        Create account
                    </CreateButton>
                    {/* {error && <p>{error}</p>} */}
                    <TextBottom>
                        By proceeding, you consent to get WhatsApp or SMS messages,
                    </TextBottom>
                    <TextBottom>
                        from PhotoDrop and its affiliates to the number provided. Text{' '}
                    </TextBottom>
                    <TextBottom>&quot;STOP&quot; to 89203 to opt out. </TextBottom>
                </LoginDiv>
            </LoginMain>
        </Main>
    );
};
