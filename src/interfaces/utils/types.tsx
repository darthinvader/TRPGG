export interface MediaHref {
  type: "internal" | "external";
  path: string;
}

export interface Type {
  name?: string;
  type: string;
  source?: string;
  description?: string;
  page?: string;
  id?: string;
}

