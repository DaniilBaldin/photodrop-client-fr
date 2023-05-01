export type Props = {
    show: boolean;
    onClose: () => void;
    id?: string;
};

export type Data = {
    album: {
        id: number;
        name: string;
        location: string;
        date: string;
        photographerId: number;
        owned: boolean;
        coverImageUrl: string;
    };
    success: boolean;
};
