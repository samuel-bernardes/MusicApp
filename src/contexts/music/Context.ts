import { createContext } from "react";
import { Context } from "./types";

const MusicContext = createContext<Context>({} as Context);

export default MusicContext;
