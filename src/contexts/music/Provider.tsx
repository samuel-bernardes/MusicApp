import React, { useMemo, useState } from "react";
import MusicContext from "./Context";
import { IMusic } from "./types";

const MusicProvider: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
    const [music, setMusic] = useState<IMusic>();

    const setNewMusic = (music: IMusic) => {
        setMusic(music);
    };

    const state = useMemo(() => {
        return { setNewMusic, music };
    }, [music]);

    return (
        <MusicContext.Provider value={state}>
            {children}
        </MusicContext.Provider>
    );
};

export default MusicProvider;