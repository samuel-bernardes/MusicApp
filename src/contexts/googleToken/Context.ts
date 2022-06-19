import { createContext } from "react";
import { Context } from "./types";

const GooleTokenContext = createContext<Context>({} as Context);

export default GooleTokenContext;