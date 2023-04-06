import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import OtpInput from 'react18-input-otp';
import { Dispatch, Selector } from '~/store/hooks/hooks';
import { addToken } from '~/store/reducers/tokenReducer';
import { phoneSelector } from '~/store/selectors/phoneSelector';

import {
    Main,
    VerifyMain,
    VerifyDiv,
    TextTitle,
    Text,
    TextBold,
    Input,
    ResendButton,
    NextButton,
    InputFocus,
} from './verifyStyles';

export const Verify: FC = (): JSX.Element => {
    const [otp, setOtp] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [hidden, setHidden] = useState<boolean>(false);

    const baseUrl = import.meta.env.VITE_BASE_URL;

    const navigate = useNavigate();
    const dispatch = Dispatch();

    const phone = Selector(phoneSelector);

    const handleOtpChange = (enteredOtp: string) => {
        setOtp(enteredOtp);
    };

    const handleCodeResend = async (event: { preventDefault: () => void }) => {
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
            setError('Code resend was not successful.');
        }
        if (response.ok && data.success) {
            setHidden(true);
        }
    };

    const handleOtpSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault();

        const response = await fetch(`${baseUrl}user/verify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phoneNumber: phone,
                code: otp,
            }),
        });
        const data = await response.json();
        if (!response.ok && !data.success) {
            setError('Code is not valid');
        }
        if (response.ok && data.success) {
            const token = data.token;
            dispatch(addToken(token));
            localStorage.setItem('token', token);

            if (data.newUser) {
                navigate('/selfie');
            } else {
                navigate('/');
            }
        }
    };

    return (
        <React.Fragment>
            <Main>
                <VerifyMain>
                    <VerifyDiv>
                        <TextTitle>What’s the code?</TextTitle>

                        <Text>
                            Enter the code sent to &nbsp; <TextBold>{`${phone}`}</TextBold>
                        </Text>
                        <OtpInput
                            value={otp}
                            onChange={handleOtpChange}
                            onSubmit={handleOtpSubmit}
                            numInputs={6}
                            isInputNum={true}
                            inputStyle={Input}
                            focusStyle={InputFocus}
                        />
                        <ResendButton type="button" onClick={handleCodeResend} disabled={hidden}>
                            Resend code
                        </ResendButton>
                        <NextButton
                            type="submit"
                            disabled={!otp || otp.length < 6}
                            onClick={handleOtpSubmit}
                        >
                            Next
                        </NextButton>
                        {error && <p>{error}</p>}
                    </VerifyDiv>
                </VerifyMain>
            </Main>
        </React.Fragment>
    );
};
