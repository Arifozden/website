import { ICharacter } from "./ICharacter"


export interface ICharacterQuery {
    characters: {
        results: Array<ICharacter>
        info: {
            pages: number
        }
    }
}