import { createContext, useState } from "react";
import { IUseContext } from "../Interfaces/IuseContext";

const defaultValue: IUseContext = {
  userName: null,
  setUserName: useState
};

const userContext = createContext(defaultValue);

export default userContext;
