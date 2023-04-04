import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Selector } from '~/store/hooks/hooks';
import { tokenSelector } from '~/store/selectors/tokenSelector';

import {
    FooterMain,
    FooterContainer,
    FooterColumn,
    FooterTitle,
    FooterLogo,
    StyledText,
    FrameButton,
    ButtonText,
    DateText,
    MailText,
    MailLink,
    TermsLinks,
    TermsLink,
} from './footerStyles';

export const Footer: FC = () => {
    const jwtToken = Selector(tokenSelector);

    const path = useLocation().pathname;

    return (
        <FooterMain
            hidden={
                !jwtToken ||
                path === '/settings' ||
                path === '/settings-change-name' ||
                path === '/success'
            }
        >
            <FooterContainer>
                <FooterColumn>
                    <FooterTitle>PhotoDrop is brought to you by</FooterTitle>
                    <FooterLogo
                        src="/FrameologyLogo.svg"
                        alt="Frameology"
                        width={150}
                        height={24}
                    />
                    <StyledText>
                        Our mission is to help people connect with their memories. If you framing
                        some of the photos from your experience, please consider using Frameology.
                        It supports the photographers and makes PhotoDrop possible.
                    </StyledText>
                    <FrameButton>
                        <ButtonText>Order photos</ButtonText>
                    </FrameButton>
                    <DateText>© {new Date().getFullYear()} FOM Online Inc</DateText>
                </FooterColumn>
                <FooterColumn>
                    <MailText>
                        Questions? Get in touch -{' '}
                        <MailLink
                            href="mailto:hello@photodrop.me"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            hello@photodrop.me
                        </MailLink>
                    </MailText>
                    <FooterLogo src="/NeutralClimate.svg" alt="Climate" width={100} height={40} />
                    <TermsLinks>
                        <TermsLink to="/terms">Terms of Services</TermsLink>
                        <TermsLink to="/privacy">Privacy Policy</TermsLink>
                    </TermsLinks>
                </FooterColumn>
            </FooterContainer>
        </FooterMain>
    );
};
