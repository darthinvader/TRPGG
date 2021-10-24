interface AbilityScore {
  base: number | null;
  modifier: number | null;
  bonus?: { addedAmount?: number; staticAmount?: number; effect?: string }[];
}

interface ClassAndLevel {
  class: string;
  level: number;
}

interface Character {
  name: string;
  race: string;
  classAndLevel: ClassAndLevel;
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
  inteligence: AbilityScore;
  wisdom: AbilityScore;
  charisma: AbilityScore;
}

export const emptyCharacter: Character = {
  name: "",
  race: "",
  classAndLevel: { class: "", level: 0 },
  background: "",
  age: "",
  eyes: "",
  height: "",
  skin: "",
  weight: "",
  hair: "",
  strength: { base: null, modifier: null },
  dexterity: { base: null, modifier: null },
  constitution: { base: null, modifier: null },
  inteligence: { base: null, modifier: null },
  wisdom: { base: null, modifier: null },
  charisma: { base: null, modifier: null },
};

export default Character;
