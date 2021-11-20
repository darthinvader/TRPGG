import { createContext, FC, useContext, useState } from "react";
import Character, {
  abilityKey,
  emptyCharacter,
  infoKey,
} from "../../interfaces/character/character";
import AbilityScore from "../../interfaces/character/abilityScore";
import ClassAndLevel from "../../interfaces/character/classAndLevel";
import _ from "lodash";
import CharacterImage from "../../interfaces/character/characterImage";

const CharacterContext = createContext<Character>(emptyCharacter);
const CharacterUpdateContext = createContext<any>(null);

export const useCharacter = () => useContext(CharacterContext);
export const useCharacterUpdate = () => useContext(CharacterUpdateContext);

const CharacterProvider: FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [character, setCharacter] = useState<Character>(emptyCharacter);

  const changeImage = (value: CharacterImage) => {
    console.log(value);
    let newCharacter = _.cloneDeep(character);
    newCharacter.image = value;
    setCharacter(newCharacter);
  };

  const changeAbility = (ability: abilityKey, value: AbilityScore) => {
    let newCharacter = _.cloneDeep(character);
    newCharacter.abilities[ability] = value;
    setCharacter(newCharacter);
  };

  const changeInfo = (info: infoKey, value: string) => {
    let newCharacter = _.cloneDeep(character);
    newCharacter.info[info] = value;
    setCharacter(newCharacter);
  };

  const changeClassAndLevel = (value: ClassAndLevel[]) => {
    let newCharacter = _.cloneDeep(character);
    newCharacter.classAndLevel = value;
    setCharacter(newCharacter);
  };

  return (
    <CharacterContext.Provider value={character}>
      <CharacterUpdateContext.Provider
        value={{ changeAbility, changeInfo, changeClassAndLevel, changeImage }}
      >
        {children}
      </CharacterUpdateContext.Provider>
    </CharacterContext.Provider>
  );
};

export default CharacterProvider;
