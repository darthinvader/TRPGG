import Ability from "../ability";
import Pact from "./pact";
import Patron from "./patron";

interface ClassFromSource {
  name: string;
  source: string;
}

interface LevelPrerequisite {
  level: number;
  class?: ClassFromSource;
  subClass?: ClassFromSource;
}

interface Prerequisite {
  LevelPrerequisite?: LevelPrerequisite;
  Patron?: Patron;
  Pact?: Pact;
  Spell?: Object;
  Feature?: Object;
  Item?: Object;
  Other?: string;
  Race?: Object;
  Ability?: Ability;
  Spellcasting?: boolean;
  Psionics?: boolean;
  Proficiency?: object;
}

export default Prerequisite;
