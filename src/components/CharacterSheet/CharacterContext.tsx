import { createContext, FC, useContext, useState } from "react";
import Character, {
  AbilityScore,
  ClassAndLevel,
  emptyCharacter,
  setAbility,
} from "../../interfaces/character/character";
import _ from "lodash";
const CharacterContext = createContext<Character>(emptyCharacter);
const CharacterUpdateContext = createContext<any>(null);

export const useCharacter = () => useContext(CharacterContext);
export const useCharacterUpdate = () => useContext(CharacterUpdateContext);

const CharacterProvider: FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [character, setCharacter] = useState<Character>(emptyCharacter);

  const changeAbility = (ability: string, value: AbilityScore) => {
    let newCharacter = _.cloneDeep(character);
    newCharacter = setAbility(newCharacter, ability, value);
    setCharacter(newCharacter);
  };

  const changeInfo = (info: string, value: string) => {
    let newCharacter = _.cloneDeep(character);
    switch (info.toLowerCase()) {
      case "imageurl":
        newCharacter.imageUrl = value;
        break;
      case "name":
        newCharacter.name = value;
        break;
      case "race":
        newCharacter.race = value;
        break;
      case "background":
        newCharacter.background = value;
        break;
      case "age":
        newCharacter.age = value;
        break;
      case "eyes":
        newCharacter.eyes = value;
        break;
      case "height":
        newCharacter.height = value;
        break;
      case "skin":
        newCharacter.skin = value;
        break;
      case "weight":
        newCharacter.weight = value;
        break;
      case "hair":
        newCharacter.hair = value;
        break;
    }
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
        value={{ changeAbility, changeInfo, changeClassAndLevel }}
      >
        {children}
      </CharacterUpdateContext.Provider>
    </CharacterContext.Provider>
  );
};

export default CharacterProvider;
