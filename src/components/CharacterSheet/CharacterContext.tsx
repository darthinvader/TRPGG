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
    setCharacter((oldCharacter) => {
      let newCharacter = _.cloneDeep(oldCharacter);
      newCharacter.image = value;
      return newCharacter;
    });
  };

  const changeAbility = (ability: abilityKey, value: AbilityScore) => {
    setCharacter((oldCharacter) => {
      let newCharacter = _.cloneDeep(oldCharacter);
      newCharacter.abilities[ability] = value;
      return newCharacter;
    });
  };

  const changeInfo = (info: infoKey, value: string) => {
    setCharacter((oldCharacter) => {
      let newCharacter = _.cloneDeep(oldCharacter);
      console.log(character);
      newCharacter.info[info] = value;
      return newCharacter;
    });
  };

  const changeClassAndLevel = (value: ClassAndLevel[]) => {
    setCharacter((oldCharacter) => {
      let newCharacter = _.cloneDeep(oldCharacter);
      newCharacter.classAndLevel = value;
      return newCharacter;
    });
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
