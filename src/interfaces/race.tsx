import AbilityBonus from "./abilityBonus";
import CreatureType from "./creatureType";
import Language from "./language";
import MovementType from "./movementType";
import RaceTrait from "./raceTrait";
import Size from "./size";

interface Race {
  size: Size[];
  movementType: MovementType[];
  speed: number;
  speedInMeters: number;
  abilityBonuses: AbilityBonus;
  raceTrait: RaceTrait;
  languages: Language[];
  baseRace: string;
  source: string;
  creatureType: CreatureType;
  adultAge: number;
}

export default Race;
