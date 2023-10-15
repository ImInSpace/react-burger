export interface IIngredientDataShape {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
}

export interface IResponseResult {
  success: boolean;
}

export interface IIngredientsResponse extends IResponseResult {
  data: IIngredientDataShape;
}

export interface IRegistrationFormSend {
  email: string;
  password: string;
  name: string;
}
