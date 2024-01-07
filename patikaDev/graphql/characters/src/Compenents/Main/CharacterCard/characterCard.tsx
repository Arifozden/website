import { ICharacter } from "../../../Interfaces/ICharacter";

interface IProps {
  char: ICharacter;
}

const CharacterCard = ({ char }: IProps) => {
  return (
    <div className="text-left">
      <div>
        <img src={char.image} alt="" />
      </div>
      <div>
        <div className="font-extralight flex justify-between">
          <span>{char.species}</span>
          <span>{char.gender}</span>
        </div>
        <div className="text-xl font-semibold">{char.name}</div>
        <div className="font-normal">{char.location.name}</div>
      </div>
    </div>
  );
};

export default CharacterCard;
