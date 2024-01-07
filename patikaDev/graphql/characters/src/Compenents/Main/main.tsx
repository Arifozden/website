import { useContext } from "react";
import { GraphQlContext } from "../../Context/GraphQlContext/Context";
import CharacterCard from "./CharacterCard/characterCard";
import Filter from "./Filter/filter";
import Pagination from "./Pagination/pagination";

const Main = () => {
  const { characters } = useContext(GraphQlContext);

  return (
    <div className="flex justify-center my-5">
      <div className="mx-5 hidden md:block">
        <div className="text-5xl border-b my-2 font-light text-left flex justify-between">
          <span>Filters</span>
          <button className="text-xl center">clear</button>
        </div>
        <Filter />
      </div>
      <div className="md:w-1/2">
        <div className="text-5xl  my-2 border-b-2 font-light">CHARACTERS</div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-12">
          {characters.map((char) => (
            <CharacterCard char={char} key={char.id} />
          ))}
        </div>
        <div className="">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Main;
