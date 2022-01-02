import AbilityScore from "./abilityScore";
import CharacterImage from "./characterImage";
import ClassAndLevel from "./classAndLevel";

export default interface Character {
  image: CharacterImage;

  info: {
    name: string;
    race: string;
    background: string;
    age: string;
    eyes: string;
    height: string;
    skin: string;
    weight: string;
    hair: string;
    alignment: string;
  };
  classAndLevel: ClassAndLevel[];
  abilities: {
    strength: AbilityScore;
    dexterity: AbilityScore;
    constitution: AbilityScore;
    intelligence: AbilityScore;
    wisdom: AbilityScore;
    charisma: AbilityScore;
  };
}

export const emptyCharacter: Character = {
  image: {
    imageUrl: "",
    offsetX: 0,
    offsetY: 0,
    width: 200,
    height: 200,
    scale: 1,
  },

  info: {
    name: "",
    race: "",
    background: "",
    age: "",
    eyes: "",
    height: "",
    skin: "",
    weight: "",
    hair: "",
    alignment: "",
  },

  classAndLevel: [],
  abilities: {
    strength: { base: null, modifier: null, total: null },
    dexterity: { base: null, modifier: null, total: null },
    constitution: { base: null, modifier: null, total: null },
    intelligence: { base: null, modifier: null, total: null },
    wisdom: { base: null, modifier: null, total: null },
    charisma: { base: null, modifier: null, total: null },
  },
};

export type abilityKey = keyof Character["abilities"];
export type infoKey = keyof Character["info"];
