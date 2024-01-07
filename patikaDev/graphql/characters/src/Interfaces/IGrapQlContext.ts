import { ICharacter } from "./ICharacter";
import { IFilter } from "./IFilter";

export interface IGraphQlContext {
    characters: Array<ICharacter>
    pageCount: number
    page: number
    setPage: React.Dispatch<React.SetStateAction<number>>
    filter: IFilter,
    setFilter: React.Dispatch<React.SetStateAction<IFilter>>
}