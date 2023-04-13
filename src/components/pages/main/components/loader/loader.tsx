import React, { FC } from 'react';
import { LoaderMain, Image, Text } from './loaderstyles';

export const Loader: FC = () => {
    return (
        <LoaderMain>
            <Image src={'/gif-loader.gif'} alt="loader" />
            <Text>Almost there...</Text>
        </LoaderMain>
    );
};
