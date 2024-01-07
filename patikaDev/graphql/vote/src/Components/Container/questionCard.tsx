import IQuestion from "../Interfaces/IQuestion";

const QuestionCard = ({ question }: { question: IQuestion }) => {
  return (
    <div>
      <div className="text-2xl">{question.Text}</div>
      <div>
        {question.Options.map((option) => (
          <div key={option.ID}>
            <input
              type="radio"
              name={question.OptionsID.toString()}
              id={(question.ID + option.ID).toString()}
              className="mx-1"
            />
            <label
              htmlFor={(question.ID + option.ID).toString()}
              className="text-lg"
            >
              {option.Text}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
