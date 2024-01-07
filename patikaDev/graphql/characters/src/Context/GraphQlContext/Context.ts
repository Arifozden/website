import { createContext, useState } from "react";
import { IGraphQlContext } from "../../Interfaces/IGrapQlContext";

export const contextDefaultValue: IGraphQlContext = {
    characters: [],
    pageCount: 0,
    page: 1,
    setPage: useState,
    filter: { name: "", gender: "", species: "" },
    setFilter: useState
};

export const GraphQlContext = createContext(contextDefaultValue);
