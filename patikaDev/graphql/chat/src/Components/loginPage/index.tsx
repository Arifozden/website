import { FormEvent, useContext, useState } from "react";
import userContext from "../Context/userContext";

const LoginPage = () => {
  const [user, setUser] = useState("");
  const { setUserName, userName } = useContext(userContext);
  const createUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (user.length > 1) setUserName(user);
  };

  return (
    <div
      style={{ display: `${userName && "none"}` }}
      className="flex h-full items-center"
    >
      <div className="w-full">
        <div className="text-4xl">UserName</div>
        <form action="" onSubmit={createUser}>
          <input
            className="my-2 px-2 md:w-1/3 w-full  text-black outline-none py-1"
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <div>
            <button className="text-2xl border rounded-xl px-3 py-1">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
