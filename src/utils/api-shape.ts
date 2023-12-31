import { TIngredient, TUser } from "../services/types/data";
import {
  ORDER_STATUS_CREATED,
  ORDER_STATUS_PENDING,
  ORDER_STATUS_DONE,
} from "../constants";

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
  data: ReadonlyArray<TIngredient>;
}

export interface IRegistrationRequestForm {
  email: string;
  password: string;
  name: string;
}

export interface IRefreshTokenRequest extends IToken {}

export interface IRefreshTokenResponse extends IResponseResult {
  accessToken: string;
  refreshToken: string;
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

export interface IPatchBodyResponse extends IResponseResult, IUser {}

export interface IForgotPasswordRequestBody {
  email: string;
}

interface IMessage {
  message: string;
}

export interface IForgotPasswordResponseBody
  extends IResponseResult,
    IMessage {}

export interface IResetPasswordResponseBody extends IResponseResult, IMessage {}

export interface ILoginResponseBody extends IResponseResult {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

interface IToken {
  token: string;
}

export interface ILogoutRequestBody extends IToken {}

export interface IUpdateTokenRequestBody {
  token: string;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IUpdateTokenResponseBody extends IResponseResult, ITokens {}

export interface ILogoutResponseBody extends IResponseResult, IMessage {}

export interface IGetUserResponseBody extends IResponseResult {
  user: TUser;
}

interface IGetUserRequest extends IToken {}

export enum EOrderStatus {
  created = "created",
  pending = "pending",
  done = "done",
}

export type TOrder = {
  ingredients: ReadonlyArray<string>;
  _id: string;
  status: EOrderStatus;
  number: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type TWsResponseBody = {
  success: boolean;
  orders: ReadonlyArray<TOrder>;
  total: number;
  totalToday: number;
};
