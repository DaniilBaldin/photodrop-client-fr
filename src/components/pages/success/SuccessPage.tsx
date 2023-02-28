import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Main,
    MainDiv,
    Title,
    TextPlain,
    TextBold,
    Image,
    Button,
    ButtonText,
    TextSmall,
} from './SuccessStyles';

const album = {
    id: 351,
    album_name: 'album',
    album_location: 'Kriviy Rih',
    date: '2022-11-10T00:00:00.000Z',
    person_id: '1',
    album_logo:
        'https://photodrop-s3-bucket.s3.amazonaws.com/upload/ba84cf8c-7838-4f80-8a04-fe00815fde7a.jpg',
    owned: false,
};

//TODO: Album data from global state
//TODO: Link to album on button by id

export const SuccessPage = () => {
    const navigate = useNavigate();
    const buttonHandler = () => {
        navigate('/album/351');
    };

    return (
        <Main>
            <MainDiv>
                <Title>Thank you</Title>
                <TextPlain>
                    The album <TextBold>Album 1</TextBold> is now unlocked.
                </TextPlain>
                <TextPlain>
                    You can now download, share, post, and print your hi-res, watermark-free,
                    glorious memories.
                </TextPlain>
                <Image src={album.album_logo} alt="Album logo" />
                <Button onClick={buttonHandler}>
                    <ButtonText>See photos</ButtonText>
                </Button>
                <TextSmall>You will receive an email with your order details.</TextSmall>
            </MainDiv>
        </Main>
    );
};
