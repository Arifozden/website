import { useContext } from "react";
import { GraphQlContext } from "../../../Context/GraphQlContext/Context";
import { TFilterGender, TFilterSpecies } from "../../../Types/TFilter";

const genderList: Array<TFilterGender> = [
  "Female",
  "Genderless",
  "Male",
  "Unknown",
];
const speciesList: Array<TFilterSpecies> = [
  "Alien",
  "Animal",
  "Cronenberg",
  "Diease",
  "Human",
  "Humanoid",
  "Mytholog",
  "Poopybutthole",
  "Robot",
  "Unknown",
];

const Filter = () => {
  const { filter, setFilter } = useContext(GraphQlContext);

  const genderSelect = (gender: string) => {
    if (filter.gender === gender) {
      setFilter({ ...filter, gender: "" });
    } else {
      setFilter({ ...filter, gender: gender as TFilterGender });
    }
  };
  const speciesSelect = (spec: string) => {
    if (filter.species === spec) {
      setFilter({ ...filter, species: "" });
    } else {
      setFilter({ ...filter, species: spec as TFilterSpecies });
    }
  };

  return (
    <div className="text-left select-none">
      <div className="my-5">
        <div className="border-b text-2xl">Gender</div>
        {genderList.map((gender) => (
          <div key={gender}>
            <input
              type="checkbox"
              id={gender + "gender"}
              name="gender"
              onClick={(e) => genderSelect(gender)}
              checked={filter.gender !== "" && filter.gender === gender}
              defaultValue={0}
              onChange={() => {}}
            />
            <label htmlFor={gender + "gender"} className="mx-2">
              {gender}
            </label>
          </div>
        ))}
      </div>
      <div>
        <div className="border-b text-2xl">Species</div>
        {speciesList.map((spec) => (
          <div key={spec}>
            <input
              type="checkbox"
              name="spec"
              id={spec + "spec"}
              onClick={() => speciesSelect(spec)}
              checked={filter.species !== "" && filter.species === spec}
              defaultValue={0}
              onChange={() => {}}
            />
            <label htmlFor={spec + "spec"} className="mx-2">
              {spec}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Filter;
