import { createContext } from "react";
import { Context } from "./types";

const ProfileContext = createContext<Context>({} as Context);

export default ProfileContext;