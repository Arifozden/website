import { useSubscription } from "@apollo/client";
import subscription from "../../Apollo/GraphQL/Subscription";
import IQuestion from "../Interfaces/IQuestion";
import QuestionCard from "./questionCard";

const Container = () => {
  const { loading, data, error } = useSubscription<{
    Question: Array<IQuestion>;
  }>(subscription);
  if (error) console.log(error.message);
  if (loading) return <div>Loading...</div>;
  if (data)
    return (
      <div className="grid grid-cols-5 py-2">
        {data.Question.map((q) => (
          <QuestionCard key={q.ID} question={q} />
        ))}
      </div>
    );
  return <div></div>;
};

export default Container;
