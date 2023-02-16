import React, { useState } from 'react';

import { Header } from '~/components/common/header/header';

import OtpInput from 'react18-input-otp';

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

/* TODO:Edit phone using redux
TODO: add hook to send OTP code, connect resend OTP button
*/

export const Verify = () => {
    const [otp, setOtp] = useState<string>('');

    const handleOtpChange = (enteredOtp: string) => {
        setOtp(enteredOtp);
    };

    const handleOtpSubmit = () => {
        console.log(otp);
    };

    return (
        <Main>
            <Header />
            <VerifyMain>
                <VerifyDiv>
                    <TextTitle>What’s the code?</TextTitle>

                    <Text>
                        Enter the code sent to &nbsp; <TextBold>+380671234567</TextBold>
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
                    <ResendButton>Resend code</ResendButton>
                    <NextButton
                        type="button"
                        disabled={!otp || otp.length < 6}
                        onClick={handleOtpSubmit}
                    >
                        Next
                    </NextButton>
                </VerifyDiv>
            </VerifyMain>
        </Main>
    );
};
