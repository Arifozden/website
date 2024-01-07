import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { characterQuery } from "../../GraphQl/Queries/character";
import { ICharacterQuery } from "../../Interfaces/ICharacterQuery";
import { contextDefaultValue, GraphQlContext } from "./Context";

interface IProps {
  children: Array<JSX.Element> | JSX.Element;
}

export const GraphQlContextProvider = ({ children }: IProps) => {
  //***********   States  ************ */
  const [characters, setCharacters] = useState(contextDefaultValue.characters);
  const [page, setPage] = useState(contextDefaultValue.page);
  const [pageCount, setPageCount] = useState(contextDefaultValue.pageCount);
  const [filter, setFilter] = useState(contextDefaultValue.filter);
  const characterQueryRes = useQuery<ICharacterQuery>(characterQuery, {
    variables: {
      page: page,
      name: filter.name,
      gender: filter.gender,
      species: filter.species,
    },
  });

  useEffect(() => {
    if (characterQueryRes.data) {
      setCharacters(characterQueryRes.data.characters.results);
      setPageCount(characterQueryRes.data.characters.info.pages);
    }
  }, [characterQueryRes]);
  useEffect(() => {
    setPage(1);
  }, [filter]);

  const values = { characters, page, setPage, pageCount, filter, setFilter };

  return (
    <GraphQlContext.Provider value={values}>{children}</GraphQlContext.Provider>
  );
};
