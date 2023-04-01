export interface ISongs {
    album: string;
    artist: string;
    id: string;
    imageUri: string;
    is_playable: any;
    preview_url: any;
    title: string;
}

export interface ISearch {
    text: string;
    data: any;
    renderList: any;
    bannerVisible: "none" | "flex";
    iconFunction: () => void;
    handleSearchChange: (text: string) => void;
}