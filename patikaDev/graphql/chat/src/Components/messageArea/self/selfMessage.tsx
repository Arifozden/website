import { IMessage } from "../../Interfaces/IMessage";
import BasicMessage from "../basicMessage";

const SelfMessage = ({ message }: { message: IMessage }) => {
  return (
    <div className="text-right">
      <div className="max-w-[60%] min-w-[10%] my-3 bg-[#5e6c82] rounded-md inline-block text-center">
        <BasicMessage message={message} />
      </div>
    </div>
  );
};

export default SelfMessage;
