import React, { FC, useEffect, useState } from 'react';

import { Input } from './InputStyles';

type Props = {
    dialCode: string;
    phone: (phone: string) => void;
};

export const PhoneInput: FC<Props> = (props) => {
    const [number, setNumber] = useState(`${props.dialCode}`);

    const albumChangeHandler = (event: { target: { value: React.SetStateAction<string> } }) => {
        setNumber(event.target.value);
        props.phone(event.target.value as string);
    };

    useEffect(() => {
        setNumber(props.dialCode);
    }, [props.dialCode]);

    return (
        <Input
            type="text"
            pattern="\d*"
            required
            maxLength={13}
            onInput={(event) => {
                event.currentTarget.value = event.currentTarget.value
                    .replace(/[^+0-9.]/g, '')
                    .replace(/(\..*)\./g, '$1');
            }}
            value={number}
            onChange={albumChangeHandler}
        />
    );
};
