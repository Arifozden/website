import { IMessage } from "../../Interfaces/IMessage";

const BasicMessage = ({ message }: { message: IMessage }) => {
  return (
    <div className=" p-1">
      <div className="text-xs text-left">{message.UserName}</div>
      <div className="text-lg break-words ">{message.Text}</div>
      <div className="text-xs text-right">
        {message.CreateDate.toLocaleString("tr-TR", {
          day: "numeric",
          month: "2-digit",
          year: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
    </div>
  );
};

export default BasicMessage;
