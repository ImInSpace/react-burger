export type TUser = {
  email: string;
  name: string;
};

export type TTokens = {
  token: string;
  refreshToken: string;
};

// ToDo (union types TUser & TTokens)
export type TAuth = {
  token: string;
  refreshToken: string;

  user: TUser;
};

export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
};

export type TConstructorIngredients = {
  bun: TIngredient | null;
  ingredients: ReadonlyArray<TIngredient>;
};
