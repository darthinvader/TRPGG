import AbilityUI from "./AbilityUI";

const CharacterSheet = () => {
  return (
    <>
      <AbilityUI abilityName="Strength" />
      <AbilityUI abilityName="Dexterity" />
      <AbilityUI abilityName="Constitution" />
      <AbilityUI abilityName="Intelligence" />
      <AbilityUI abilityName="Wisdom" />
      <AbilityUI abilityName="Charisma" />
    </>
  );
};

export default CharacterSheet;
