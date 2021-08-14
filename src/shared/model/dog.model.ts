
export interface IDog {
  link?: string;
  isFavorite?: boolean;
}

export class Dog implements IDog {
  constructor(
    public link?: string,
    public isFavorite?: boolean,
  ) {}
}
