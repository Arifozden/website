import { gql } from "@apollo/client";

const subscription = gql`
subscription MySubscription {
  Question {
    ID
    Text
    OptionsID
    Options {
      ID
      Text
    }
  }
}
`

export default subscription