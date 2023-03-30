export type Context = {
    music: IMusic;
    setNewMusic: (music: IMusic) => void;
};

export interface IMusic {
    itemId: string,
    music: string,
    title: string,
    image: string,
    artist: string,
    album: string
}