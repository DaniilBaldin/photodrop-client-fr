import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dispatch, Selector } from '~/store/hooks/hooks';
import { changeName } from '~/store/reducers/userReducer';
import { tokenSelector } from '~/store/selectors/tokenSelector';
import { userSelector } from '~/store/selectors/userSelector';

import { Container, Main, Title, Input, Button, ButtonText } from './changeNameStyles';

export const ChangeName = () => {
    const [value, setValue] = useState<string>('');
    const [error, setError] = useState<string>('');

    const navigate = useNavigate();
    const dispatch = Dispatch();

    const jwtToken = Selector(tokenSelector);

    const user = Selector(userSelector);

    const baseUrl = import.meta.env.VITE_BASE_URL;

    const valueHandler = async (event: { preventDefault: () => void }) => {
        event.preventDefault();

        const response = await fetch(`${baseUrl}user/set-name/${user?.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwtToken}`,
                'ngrok-skip-browser-warning': '69420',
            },
            body: JSON.stringify({
                name: value,
            }),
        });
        const data = await response.json();
        if (!response.ok && !data.success) {
            setError('Error in changing name!');
        }
        if (response.ok && data.success) {
            dispatch(changeName(value));
            navigate('/settings');
        }
    };

    return (
        <Container>
            <Main>
                <Title>Your name</Title>
                <Input
                    onChange={(event) => {
                        setValue(event?.target.value);
                    }}
                    autoComplete="off"
                    type="text"
                    required
                    maxLength={15}
                    minLength={3}
                    placeholder="What's your name?"
                />
                <Button onClick={valueHandler}>
                    <ButtonText>Save</ButtonText>
                </Button>
                {error && <p>{error}</p>}
            </Main>
        </Container>
    );
};
