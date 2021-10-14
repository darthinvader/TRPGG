interface Material {
  text: string;
  costInCopper?: number;
  consume?: boolean | "optional";
}

interface Components {
  Verbal?: boolean;
  Somatic?: boolean;
  Material?: Material;
  Royalty?: boolean;
}

export default Components;
