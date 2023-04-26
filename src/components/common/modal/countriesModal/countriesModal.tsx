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
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
        setCountriesList(
            countries.filter((e) => {
                return e.name.startsWith(letter as string);
            }),
        );
    }, [letter]);

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
                    <Aside id="sticky" onClick={(e) => e.stopPropagation()}>
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
