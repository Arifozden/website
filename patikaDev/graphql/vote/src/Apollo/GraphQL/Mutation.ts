import { gql } from "@apollo/client";
import { ICreateQuestion } from "../../Components/Interfaces/ICreateQuestion";



const CreateQuestionMutation = (createQuestion: ICreateQuestion) => {
    const tempOptions = [...createQuestion.Options.map((opt) => { return `{ Text: "${opt}" }` })]
    const tempGqlText = `
        mutation MyMutation {
            insert_Question(objects: {Text:"${createQuestion.Title}" , Options: {data:[${tempOptions}]}}) {
                affected_rows
            }
        }
    `
    return gql`${tempGqlText}`
}


export default CreateQuestionMutation