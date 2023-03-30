import React, { useMemo, useState } from "react";

import GooleTokenContext from "./Context";

const GoogleTokenProvider: React.FC = ({ children }) => {
    const [googleToken, setGoogleToken ] = useState<string>();

    const setNewGoogleToken = (token: string) => {
        setGoogleToken(token);
    };

    const state = useMemo(() => {
        return { setNewGoogleToken, googleToken };
    }, [googleToken]);

    return (
        <GooleTokenContext.Provider value={state}>
            {children}
        </GooleTokenContext.Provider>
    );
};

export default GoogleTokenProvider;