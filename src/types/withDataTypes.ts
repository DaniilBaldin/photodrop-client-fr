export type Albums = {
    albums: {
        id: number;
        name: string;
        location: string;
        date: string;
        photographerId: number;
        owned: boolean;
        coverImageUrl: string;
    }[];
    success: boolean;
} | null;

export type AlbumsArray = {
    id: number;
    name: string;
    location: string;
    date: string;
    photographerId: number;
    owned: boolean;
    coverImageUrl: string;
}[];

export type Album = {
    id: number;
    name: string;
    location: string;
    date: string;
    photographerId: number;
    owned: boolean;
    coverImageUrl: string;
};

export type PhotosData = {
    photos: {
        id: string;
        name: string;
        ext: string;
        phoneNumbers: string[];
        albumId: number;
        owned: boolean;
        photoUrl: string;
        thumbnailUrl: string;
        phWatermarkUrl: string;
        thumbWatermarkUrl: string;
    }[];
    success: boolean;
} | null;

export type Photo = {
    id: string;
    name: string;
    ext: string;
    phoneNumbers: string[];
    albumId: number;
    owned: boolean;
    photoUrl: string;
    thumbnailUrl: string;
    phWatermarkUrl: string;
    thumbWatermarkUrl: string;
};
