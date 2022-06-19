import React, { useMemo, useState } from "react";

import ProfileContext from "./Context";
import { UserInfo } from "./types";

const ProfileProvider: React.FC = ({ children }) => {
    const [profile, setProfile] = useState<UserInfo>();

    const setNewProfile = (profile: UserInfo) => {
        setProfile(profile);
    };

    const state = useMemo(() => {
        return { setNewProfile, profile };
    }, [profile]);

    return (
        <ProfileContext.Provider value={state}>
            {children}
        </ProfileContext.Provider>
    );
};

export default ProfileProvider;