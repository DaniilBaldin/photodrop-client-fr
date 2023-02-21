import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header, HeaderMain, Image, SettingsButton } from './headerStyles';

type Props = {
    backArrow?: boolean;
    settingsButton?: boolean;
};

export const HeaderComponent: FC<Props> = (props) => {
    const jwtToken = 'token';
    const navigate = useNavigate();

    // TODO: link to user selfie image to settings button props
    return (
        <>
            {!jwtToken ? (
                <HeaderMain>
                    <Image src="/logo.svg" alt="Logo" />
                </HeaderMain>
            ) : (
                <Header>
                    <HeaderMain>
                        <Image src="/logo.svg" alt="Logo" />
                        <SettingsButton
                            type="button"
                            onClick={() => {
                                navigate('settings');
                            }}
                            hidden={!props.settingsButton}
                        ></SettingsButton>
                        {/* Arrow button */}
                    </HeaderMain>
                </Header>
            )}
        </>
    );
};
