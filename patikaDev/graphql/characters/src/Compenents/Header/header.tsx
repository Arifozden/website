import { useContext } from "react";
import { GraphQlContext } from "../../Context/GraphQlContext/Context";

const Header = () => {
  const { filter, setFilter } = useContext(GraphQlContext);

  return (
    <div className="bg-header  h-1/3 bg-cover bg-[center_50%] flex flex-col justify-center">
      <div className="md:text-5xl my-8 font-light text-white">
        Rick And Morty Characters
      </div>
      <input
        className="px-2 md:w-1/2 mx-auto outline-none py-5 rounded-md"
        placeholder="Name"
        type="text"
        onChange={(e) =>
          setTimeout(() => setFilter({ ...filter, name: e.target.value }), 1000)
        }
      />
    </div>
  );
};

export default Header;
