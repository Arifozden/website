import { useMutation } from "@apollo/client";
import { useState } from "react";
import CreateQuestionMutation from "../../Apollo/GraphQL/Mutation";
import { ICreateQuestion } from "../Interfaces/ICreateQuestion";

const CreateQuestion = () => {
  const [Question, setQuestion] = useState<ICreateQuestion>({
    Title: "a",
    Options: Array("a"),
  });

  const [mutation] = useMutation(CreateQuestionMutation(Question));

  return (
    <div>
      <div className="my-2 text-2xl">New Question</div>
      <div>
        <div className="flex justify-between">
          <span className="text-lg w-full text-end mx-2">Title:</span>
          <input
            onChange={(e) =>
              setQuestion({ ...Question, Title: e.target.value.toString() })
            }
            type="text"
            className="border border-black px-2 py-1 outline-none"
          />
        </div>
        {Question.Options.map((opt, index) => (
          <div key={index} className="flex justify-between my-2">
            <span className="mx-2 text-end w-full">Option {index + 1}:</span>
            <input
              onChange={(e) => {
                const tempArray = Question.Options.map((op, ind) =>
                  index !== ind ? op : e.target.value.toString()
                );
                setQuestion({
                  ...Question,
                  Options: [...tempArray],
                });
              }}
              type="text"
              className="border border-black px-2 py-1 outline-none"
            />
          </div>
        ))}
      </div>
      <div>
        <button
          onClick={() =>
            setQuestion({ ...Question, Options: [...Question.Options, "a"] })
          }
          className="border border-black rounded-lg px-2 py-1"
        >
          Add Option
        </button>
      </div>
      <div>
        <button
          onClick={() => mutation()}
          className="border border-black rounded-lg px-2 py-1"
        >
          Create Question
        </button>
      </div>
    </div>
  );
};

export default CreateQuestion;
