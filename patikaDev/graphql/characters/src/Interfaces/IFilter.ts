import { TFilterGender, TFilterSpecies } from "../Types/TFilter";

export interface IFilter {
    name: string,
    gender: TFilterGender
    species: TFilterSpecies
}