import { Area } from 'react-easy-crop';

export const Converter = (url: string, area: Area) => {
    const canvas = document.createElement('canvas');
    const context = <CanvasRenderingContext2D | null>canvas.getContext('2d');

    const image = new Image();
    image.crossOrigin = 'Anonymous';
    image.src = url;

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
