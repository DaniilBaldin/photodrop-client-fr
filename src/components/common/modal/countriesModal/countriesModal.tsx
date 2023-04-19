import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { countries, letters } from '~/utils/countries';

import {
    Modal,
    ModalMain,
    Header,
    Body,
    CountryButton,
    CloseButton,
    LetterButton,
    Title,
    Div,
    Aside,
} from './modalStyles';

import CloseIcon from '@mui/icons-material/Close';

type Props = {
    show: boolean;
    onClose: () => void;
    setCountry: React.Dispatch<React.SetStateAction<Country>>;
};

type Country = {
    name: string;
    dial_code: string;
    code: string;
};

export const CountriesModal = (props: Props) => {
    const [letter, setLetter] = useState<string | null>('');
    const [countriesList, setCountriesList] = useState(countries);

    useEffect(() => {
        setCountriesList(
            countries.filter((e) => {
                return e.name.startsWith(letter as string);
            }),
        );
    }, [letter]);

    const closeOnEscapeKeyDown = (e: { charCode: number; keyCode: number }) => {
        if ((e.charCode || e.keyCode) === 27) {
            props.onClose();
        }
    };

    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscapeKeyDown);
        return function cleanUp() {
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
        };
    }, []);

    const handleClose = () => {
        props.onClose();
        setLetter('');
        props.setCountry({
            name: 'United States',
            dial_code: '+1',
            code: 'US',
        });
    };

    return createPortal(
        <Modal
            onClick={() => {
                props.onClose();
                setLetter('');
            }}
            show={props.show}
        >
            <ModalMain>
                <Header onClick={(e) => e.stopPropagation()}>
                    <Title>Select country</Title>
                    <CloseButton onClick={handleClose}>
                        <CloseIcon />
                    </CloseButton>
                </Header>
                <Div>
                    <Body>
                        {countriesList.map((e: Country) => (
                            <CountryButton
                                key={e.code}
                                onClick={() => {
                                    props.setCountry(e);
                                    props.onClose;
                                }}
                            >
                                <img
                                    src={`/flags/${e.code.toLowerCase()}.svg`}
                                    alt={e.name}
                                    height="16"
                                    width="24"
                                    loading="lazy"
                                />
                                {e.name}
                            </CountryButton>
                        ))}
                    </Body>
                    <Aside onClick={(e) => e.stopPropagation()}>
                        {letters.map((e: string, index) => (
                            <LetterButton
                                key={index}
                                onClick={() => {
                                    setLetter(e);
                                }}
                            >
                                {e}
                            </LetterButton>
                        ))}
                    </Aside>
                </Div>
            </ModalMain>
        </Modal>,
        document.getElementById('root') as HTMLElement,
    );
};
