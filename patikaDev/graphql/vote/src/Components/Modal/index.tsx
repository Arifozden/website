import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useState } from "react";
import CreateQuestion from "../CreatareQuestion";

const Modal = () => {
  const [Visible, setVisible] = useState(false);
  return (
    <div className="">
      {Visible && (
        <div className="absolute bg-black h-full w-full flex justify-center items-center bg-opacity-50">
          <CreateQuestion />
        </div>
      )}
      <div
        onClick={() => setVisible(true)}
        className="absolute bottom-10 right-10 text-7xl"
      >
        <AddCircleOutlineOutlinedIcon fontSize="inherit" />
      </div>
    </div>
  );
};

export default Modal;
