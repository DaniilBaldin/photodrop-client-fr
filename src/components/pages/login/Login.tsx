import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dispatch } from '~/store/hooks/hooks';
import { addPhone } from '~/store/reducers/phoneReducer';

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

export const Login: FC = (): JSX.Element => {
    const [code, setCode] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [error, setError] = useState<string>('');

    const baseUrl = import.meta.env.VITE_BASE_URL;

    const navigate = useNavigate();
    const dispatch = Dispatch();

    const codeSet = (code: string) => {
        setCode(code);
    };

    const phoneSet = (phone: string) => {
        setPhone(phone);
    };

    const formSubmitHandler = async (event: { preventDefault: () => void }) => {
        event.preventDefault();

        const response = await fetch(`${baseUrl}user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phoneNumber: phone,
            }),
        });
        const data = await response.json();
        if (!response.ok && !data.success) {
            setError('Authorization was not successful.Check phone number.');
        }
        if (response.ok && data.success) {
            dispatch(addPhone(phone));
            navigate('verify');
        }
    };

    return (
        <Main>
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
                    {error && <p>{error}</p>}
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
