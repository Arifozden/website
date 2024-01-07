import { useState } from "react";
import userContext from "./userContext";

interface IProps {
  children: Array<JSX.Element> | JSX.Element;
}

export const UserProvider = ({ children }: IProps) => {
  const [userName, setUserName] = useState("");
  const values = { userName, setUserName };
  return <userContext.Provider value={values}>{children}</userContext.Provider>;
};
