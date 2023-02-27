import React, { useState } from 'react';
import { WithData } from './components/withData/WithData';
import { NoData } from './components/noData/NoData';

//TODO: data fetching hook

export const MainPage = () => {
    const photos = {
        data: [
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
                owned: true,
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
                owned: true,
            },
            {
                id: 361,
                photo_logo:
                    'https://photodrop-s3-bucket.s3.amazonaws.com/upload/9e15bac6-5a3b-4693-ad37-4446817b67e8.jpg',
                client_name: '+380672658690',
                photo_url:
                    'https://photodrop-s3-bucket.s3.amazonaws.com/upload/7e4206fd-566c-4949-a597-5380beb5898f.jpg',
                album_id: '361',
                marked_url:
                    'https://photodrop-s3-bucket.s3.amazonaws.com/upload/10e154cf-d841-4ed2-a5a7-ba78c18793b6.jpg',
                marked_logo:
                    'https://photodrop-s3-bucket.s3.amazonaws.com/upload/a0303958-3803-4ca1-8c81-b104ed5be5ab.jpg',
                owned: false,
            },
            {
                id: 361,
                photo_logo:
                    'https://photodrop-s3-bucket.s3.amazonaws.com/upload/13db5f37-c68c-4ab9-91c7-bf75371eaa22.jpg',
                client_name: '+380672658690',
                photo_url:
                    'https://photodrop-s3-bucket.s3.amazonaws.com/upload/a039cfa9-ba46-4746-977a-661c0606252e.jpg',
                album_id: '361',
                marked_url:
                    'https://photodrop-s3-bucket.s3.amazonaws.com/upload/70136feb-555e-4099-b64d-179aee998fa0.jpg',
                marked_logo:
                    'https://photodrop-s3-bucket.s3.amazonaws.com/upload/1c74e719-63e2-4ffb-bb59-42ce25321c88.jpg',
                owned: false,
            },
        ],
        success: true,
    };

    const albums = {
        data: [
            {
                id: 351,
                album_name: 'album',
                album_location: 'Kriviy Rih',
                date: '2022-11-10T00:00:00.000Z',
                person_id: '1',
                album_logo:
                    'https://photodrop-s3-bucket.s3.amazonaws.com/upload/ba84cf8c-7838-4f80-8a04-fe00815fde7a.jpg',
                owned: true,
            },
            {
                id: 391,
                album_name: 'Dnipro 2',
                album_location: 'Location 2',
                date: '2022-11-10T00:00:00.000Z',
                person_id: '1',
                album_logo:
                    'https://photodrop-s3-bucket.s3.amazonaws.com/upload/9e15bac6-5a3b-4693-ad37-4446817b67e8.jpg',
                owned: false,
            },
        ],
        success: true,
    };

    if (!photos.success || !albums.success) {
        return <NoData />;
    }

    if (albums.success && photos.success) {
        return <WithData albums={albums} photos={photos} />;
    }
};
