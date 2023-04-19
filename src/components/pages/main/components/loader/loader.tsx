import React, { FC } from 'react';
import { LoaderMain, Image, Text, Spinner } from './loaderstyles';

export const Loader: FC = () => {
    return (
        <LoaderMain>
            {/* <Image src={'/gif-loader.gif'} alt="loader" /> */}
            <Spinner />
            {/* <Text>Almost there...</Text> */}
        </LoaderMain>
    );
};
