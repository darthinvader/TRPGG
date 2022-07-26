import RequiresAttunementTags from "./item/requiresAttunementTags";

export default interface BasicItem {
  name: string;
  rarity?: string;
  valueInCopper?: number;
  weapon?: boolean;
  requiresAttunement?: boolean;
  requiresAttunementTags?: RequiresAttunementTags[];
  requiresAttunementAltTags?: RequiresAttunementTags[];
}
