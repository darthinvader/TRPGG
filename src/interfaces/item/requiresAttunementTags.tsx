import Alignment from "../utils/alignment";
import CreatureType from "../utils/creatureType";
import Language from "../utils/language";
import Skill from "../utils/skill";

interface RequiresAttunementTags {
  background?: string;
  race?: string;
  creatureType?: CreatureType;
  size?: string;
  class?: string;
  languageProficiency?: Language;
  skillProficiency?: Skill;
  alignment?: Alignment | string;
  str?: number;
  dex?: number;
  con?: number;
  int?: number;
  wis?: number;
  cha?: number;
  spellcasting?: boolean;
  psionics?: boolean;
}

export default RequiresAttunementTags;
