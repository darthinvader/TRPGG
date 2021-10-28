import AbilityScore from "./abilityScore";
import ClassAndLevel from "./classAndLevel";
import Ability from "../utils/ability";
export default interface Character {
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

export type abilityKey = keyof Pick<Character, Ability>;
