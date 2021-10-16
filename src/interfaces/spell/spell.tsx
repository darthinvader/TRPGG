import Ability from "../utils/ability";
import AreaTag from "../utils/areaTag";
import Background from "./backgroundForSpell";
import Class, { SubClass } from "./classForSpell";
import Components from "./components";
import Condition from "../utils/condition";
import DamageType from "./damageType";
import Duration from "./duration";
import EldritchInvocation from "./eldritchInvocationForSpell";
import MiscSpellTag from "./miscSpellTag";
import Race from "./raceForSpell";
import Range from "./range";
import ScalingLevelDice from "./scalingLevelDice";
import Source from "../utils/source";
import SpellAttack from "./spellAttack";
import SpellSchool from "./spellSchool";
import Time from "../utils/time";

interface Spell {
  name: string;
  level: number;
  school: SpellSchool;
  subschools?: string[];
  ritual: boolean;
  technomagic?: boolean;
  time: Time;
  range: Range;
  components: Components;
  duration: Duration[];
  classes: Class[];
  source: Source;
  otherSources?: Source[];
  subClasses?: SubClass[];
  races?: Race[];
  backgrounds?: Background[];
  eldritchInvocations?: EldritchInvocation[];
  damageInflict?: DamageType[];
  damageResist?: DamageType[];
  damageImmune?: DamageType[];
  damageVulnerable?: DamageType[];
  conditionInflict?: Condition[];
  savingThrow?: Ability[];
  abilityCheck?: Ability[];
  spellAttack?: SpellAttack[];
  areaTags?: AreaTag[];
  miscTags?: MiscSpellTag[];
  srd?: boolean | string;
  scalingLevelDice?: ScalingLevelDice[];
  entries?: object | string | number;
  entriesAtHigherLevel?: object | string | number;
}

export default Spell;
