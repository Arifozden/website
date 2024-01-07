import { IOption } from "./IOption"

interface IQuestion {
    ID: number,
    Text: string,
    OptionsID: number
    Options: Array<IOption>
}

export default IQuestion