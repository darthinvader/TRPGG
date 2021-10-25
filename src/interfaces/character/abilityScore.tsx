export default interface AbilityScore {
  base: number | null;
  modifier: number | null;
  bonus?: { addedAmount?: number; staticAmount?: number; effect?: string }[];
  total: number | null;
}

export const emptyAbilityScore: AbilityScore = {
  base: null,
  modifier: null,
  total: null,
};
