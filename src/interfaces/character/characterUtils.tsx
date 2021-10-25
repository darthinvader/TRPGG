import Ability from "../utils/ability";
import AbilityScore, { emptyAbilityScore } from "./abilityScore";
import Character from "./character";

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

export const setAbility = (
  character: Character,
  abilityName: string,
  value: AbilityScore
) => {
  switch (abilityName.toLowerCase()) {
    case Ability.Strength.toLowerCase():
      character.strength = value;
      break;
    case Ability.Dexterity.toLowerCase():
      character.dexterity = value;
      break;
    case Ability.Constitution.toLowerCase():
      character.constitution = value;
      break;
    case Ability.Intelligence.toLowerCase():
      character.intelligence = value;
      break;
    case Ability.Wisdom.toLowerCase():
      character.wisdom = value;
      break;
    case Ability.Charisma.toLowerCase():
      character.charisma = value;
  }
  return character;
};
