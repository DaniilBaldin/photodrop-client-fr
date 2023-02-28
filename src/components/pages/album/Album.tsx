/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';

import { PaymentModal } from '~/components/common/modal/payment/PaymentModal';
import { Lightbox } from '~/components/common/modal/lightbox/Lightbox';

import {
    Container,
    PhotosContainer,
    Photos,
    ImageButton,
    UnlockButton,
    ButtonContainer,
    ButtonText,
} from './albumStyles';

//TODO: Fetch hook album data by id
//TODO: Data props to header

type Album = {
    data: {
        album: {
            id: number;
            album_name: string;
            album_location: string;
            date: string;
            person_id: string;
            album_logo: string;
            owned: boolean;
        };
        photos: {
            id: number;
            photo_logo: string;
            client_name: string;
            photo_url: string;
            album_id: string;
            marked_url: string;
            marked_logo: string;
        }[];
    };
    success: boolean;
};

type Photo = {
    id: number;
    photo_logo: string;
    client_name: string;
    photo_url: string;
    album_id: string;
    marked_url: string;
    marked_logo: string;
};

export const Album = () => {
    // const { id } = useParams();
    const album = {
        data: {
            album: {
                id: 351,
                album_name: 'album',
                album_location: 'Kriviy Rih',
                date: '2022-11-10T00:00:00.000Z',
                person_id: '1',
                album_logo:
                    'https://photodrop-s3-bucket.s3.amazonaws.com/upload/ba84cf8c-7838-4f80-8a04-fe00815fde7a.jpg',
                owned: false,
            },
            photos: [
                {
                    id: 351,
                    photo_logo:
                        'https://photodrop-s3-bucket.s3.amazonaws.com/upload/ba84cf8c-7838-4f80-8a04-fe00815fde7a.jpg',
                    client_name: '+380672658690',
                    photo_url:
                        'https://photodrop-s3-bucket.s3.amazonaws.com/upload/0d382658-7810-4f4e-ac6c-172616372af8.jpg',
                    album_id: '351',
                    marked_url:
                        'https://photodrop-s3-bucket.s3.amazonaws.com/upload/2576075f-56d0-4018-bfd1-4053b9594d57.jpg',
                    marked_logo:
                        'https://photodrop-s3-bucket.s3.amazonaws.com/upload/beb64d93-ae37-4aa1-9a9b-5a6f4118cf9b.jpg',
                },
                {
                    id: 351,
                    photo_logo:
                        'https://photodrop-s3-bucket.s3.amazonaws.com/upload/cda07925-1f23-470d-8c32-d1fc208bb87e.jpg',
                    client_name: '+380672658690',
                    photo_url:
                        'https://photodrop-s3-bucket.s3.amazonaws.com/upload/ac09a2d2-1352-4286-bf04-1476e2d3df26.jpg',
                    album_id: '351',
                    marked_url:
                        'https://photodrop-s3-bucket.s3.amazonaws.com/upload/ca2f2c63-f3e5-408d-ab27-92ce8337d522.jpg',
                    marked_logo:
                        'https://photodrop-s3-bucket.s3.amazonaws.com/upload/46bfdf46-151f-4798-a10e-f9988b42f6a0.jpg',
                },
            ],
        },
        success: true,
    };

    const [show, setShow] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [image, setImage] = useState<string>('');
    const [buttons, setButtons] = useState<boolean>(true);

    return (
        <div>
            <Container>
                <PhotosContainer>
                    <Photos>
                        {album.data.photos.map((photo: Photo, index) =>
                            album.data.album.owned ? (
                                <ImageButton
                                    key={index}
                                    image={photo.photo_logo}
                                    onClick={() => {
                                        setShow(true);
                                        setImage(photo.photo_url);
                                        setButtons(true);
                                    }}
                                ></ImageButton>
                            ) : (
                                <ImageButton
                                    key={photo.marked_logo}
                                    image={photo.marked_logo}
                                    onClick={() => {
                                        setShow(true);
                                        setImage(photo.marked_url);
                                        setButtons(false);
                                    }}
                                ></ImageButton>
                            ),
                        )}
                    </Photos>
                    <ButtonContainer>
                        <UnlockButton
                            onClick={() => {
                                setOpen(true);
                            }}
                            show={album.data.album.owned}
                        >
                            <ButtonText>Unlock your photos</ButtonText>
                        </UnlockButton>
                    </ButtonContainer>
                    <PaymentModal
                        onClose={() => {
                            setOpen(false);
                        }}
                        show={open}
                    ></PaymentModal>
                    <Lightbox
                        onClose={() => setShow(false)}
                        show={show}
                        image={image}
                        buttons={buttons}
                    ></Lightbox>
                </PhotosContainer>
            </Container>
        </div>
    );
};
