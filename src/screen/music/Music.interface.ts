export interface IMusicView {
    image: string,
    album: string,
    artist: string,
    musicTitle: string,
    currentTimer: number,
    isPlaying: boolean,
    totalTimer: number,
    currentMillis: number,
    setCurrentTimer: (currentTimer: number) => void,
    setSongPosition: (currentPosition: number) => void,
    handleMusic: () => void
}

export interface ISoundStatus {
    isLoaded: boolean,
    isLoading: boolean,
    error: any,
    isPlaying: boolean
}
