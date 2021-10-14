export default interface Class {
  name: string;
  source: string;
  definedInSource?: string;
}

export interface SubClass {
  class: Class;
  name: string;
  source: string;
  definedInSource?: string;
}
