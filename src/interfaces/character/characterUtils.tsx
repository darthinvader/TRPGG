import Ability from "../utils/ability";
import { emptyAbilityScore } from "./abilityScore";
import Character from "./character";
import CharacterInfo from "./characterInfo";

export const getAbility = (character: Character, abilityName: string) => {
  switch (abilityName.toLowerCase()) {
    case Ability.Strength.toLowerCase():
      return character.strength;
    case Ability.Dexterity.toLowerCase():
      return character.dexterity;
    case Ability.Constitution.toLowerCase():
      return character.constitution;
    case Ability.Intelligence.toLowerCase():
      return character.intelligence;
    case Ability.Wisdom.toLowerCase():
      return character.wisdom;
    case Ability.Charisma.toLowerCase():
      return character.charisma;
    default:
      console.error("You get an ability Score that doesnt extist");
      return emptyAbilityScore;
  }
};

export const getInfo = (character: Character, infoName: string) => {
  switch (infoName.toLowerCase()) {
    case CharacterInfo.Age.toLowerCase():
      return character.age;
    case CharacterInfo.Background.toLowerCase():
      return character.background;
    case CharacterInfo.Name.toLowerCase():
      return character.name;
    case CharacterInfo.Race.toLowerCase():
      return character.race;
    case CharacterInfo.Eyes.toLowerCase():
      return character.eyes;
    case CharacterInfo.Hair.toLowerCase():
      return character.hair;
    case CharacterInfo.Skin.toLowerCase():
      return character.skin;
    case CharacterInfo.Height.toLowerCase():
      return character.height;
    case CharacterInfo.Weight.toLowerCase():
      return character.weight;
    default:
      console.error("You get an ability Score that doesnt extist");
      return "";
  }
};

export const setInfo = (
  character: Character,
  infoName: string,
  value: string
) => {
  switch (infoName.toLowerCase()) {
    case CharacterInfo.Age.toLowerCase():
      character.age = value;
      break;
    case CharacterInfo.Background.toLowerCase():
      character.background = value;
      break;
    case CharacterInfo.Name.toLowerCase():
      character.name = value;
      break;
    case CharacterInfo.Race.toLowerCase():
      character.race = value;
      break;
    case CharacterInfo.Eyes.toLowerCase():
      character.eyes = value;
      break;
    case CharacterInfo.Hair.toLowerCase():
      character.hair = value;
      break;
    case CharacterInfo.Skin.toLowerCase():
      character.skin = value;
      break;
    case CharacterInfo.Height.toLowerCase():
      character.height = value;
      break;
    case CharacterInfo.Weight.toLowerCase():
      character.weight = value;
      break;
  }
  return character;
};
