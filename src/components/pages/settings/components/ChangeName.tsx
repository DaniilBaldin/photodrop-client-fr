import React, { useState } from 'react';

import { Container, Main, Title, Input, Button, ButtonText } from './changeNameStyles';

// TODO: data handling hook
export const ChangeName = () => {
    const [value, setValue] = useState<string>('');

    const valueHandler = () => {
        console.log(value);
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
            </Main>
        </Container>
    );
};
