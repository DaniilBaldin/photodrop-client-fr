export const getBlob = async (url: string) => {
    try {
        const response = await fetch(url);
        const blob = response.blob();
        return blob;
    } catch (err) {
        console.log(err);
    }
};
