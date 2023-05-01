import React, { FC } from 'react';
import { LoaderMain, Image } from './loaderstyles';

export const Loader: FC = () => {
    return (
        <LoaderMain>
            <Image src={'/gif-loader.gif'} alt="loader" />
        </LoaderMain>
    );
};
