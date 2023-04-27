import { Area } from 'react-easy-crop';

const createImage = async (url: string): Promise<HTMLImageElement> => {
    const path = window.location.pathname;

    return new Promise((resolve) => {
        const image = new Image();
        image.addEventListener('load', () => resolve(image));
        image.addEventListener('error', () => {
            const errMsg = `Error loading image at ${url}`;
            console.log(errMsg);
        });
        image.crossOrigin = 'anonymous';
        image.alt = 'image';

        if (url.split(':')[0] !== 'blob' && path !== '/selfie') {
            image.src = url + '?' + new Date().getTime();
        } else {
            image.src = url;
        }
    });
};

export const Converter = async (url: string, area: Area) => {
    const image = await createImage(url);
    console.log(url);
    const canvas = document.createElement('canvas');
    const context = <CanvasRenderingContext2D | null>canvas.getContext('2d');
    if (!context) return;

    // const image = new Image();
    // image.crossOrigin = 'Anonymous';
    // image.src = url;

    canvas.width = area.width;
    canvas.height = area.height;

    context?.drawImage(
        image,
        area.x,
        area.y,
        area.width,
        area.height,
        0,
        0,
        area.width,
        area.height,
    );

    return new Promise((resolve) => {
        canvas.toBlob(resolve, 'image/jpeg');
    });
};
