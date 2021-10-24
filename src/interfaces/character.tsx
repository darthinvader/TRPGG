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

export default Character;
