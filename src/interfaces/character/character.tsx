import Ability from "../utils/ability";

export interface AbilityScore {
  base: number | null;
  modifier: number | null;
  bonus?: { addedAmount?: number; staticAmount?: number; effect?: string }[];
  total: number | null;
}

export interface ClassAndLevel {
  class: string;
  level: number;
}

interface Character {
  imageUrl: string;
  name: string;
  race: string;
  classAndLevel: ClassAndLevel[];
  background: string;
  age: string;
  eyes: string;
  height: string;
  skin: string;
  weight: string;
  hair: string;
  strength: AbilityScore;
  dexterity: AbilityScore;
  constitution: AbilityScore;
  intelligence: AbilityScore;
  wisdom: AbilityScore;
  charisma: AbilityScore;
}

export const emptyCharacter: Character = {
  imageUrl: "",
  name: "",
  race: "",
  classAndLevel: [],
  background: "",
  age: "",
  eyes: "",
  height: "",
  skin: "",
  weight: "",
  hair: "",
  strength: { base: null, modifier: null, total: null },
  dexterity: { base: null, modifier: null, total: null },
  constitution: { base: null, modifier: null, total: null },
  intelligence: { base: null, modifier: null, total: null },
  wisdom: { base: null, modifier: null, total: null },
  charisma: { base: null, modifier: null, total: null },
};

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
      return null;
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

export default Character;
