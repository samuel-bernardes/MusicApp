export interface UserInfo {
    email: string;
    family_name: string;
    given_name: string;
    id: string;
    locale: string;
    name: string;
    picture: string;
    verified_email: true;
}

export type Context = {
    profile: UserInfo;
    setNewProfile: (profile: UserInfo) => void;
  };