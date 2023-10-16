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

export interface IRegistrationRequestForm {
  email: string;
  password: string;
  name: string;
}

export interface IRegistrationResponseForm extends IResponseResult {
  user: IUser;
  accessToken: string;
  refreshToken: string;
}

interface IUser {
  email: string;
  name: string;
}

// Информация о заказчике.
interface IOwner {
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

// Информация о заказе.
interface IOrder {
  _id: string;
  ingredients: Array<IIngredientDataShape>;
  owner: IOwner;
  status: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  number: number;
  price: number;
}

export interface ICreateOrderResponseForm extends IResponseResult {
  name: string;
  order: IOrder;
}

export interface ICreateOrderRequestForm {
  ingredients: Array<string>;
}

export interface IResetPasswordForm {
  password: string;
  token: string;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IPatchForm {
  name?: string;
  email?: string;
  password?: string;
}
