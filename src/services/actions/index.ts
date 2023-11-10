import { TAuthActions } from "./auth";
import { TForgotPasswordActions } from "./forgot-password";
import { TIngredientsActions } from "./ingredients";
import { TModalActions } from "./modal";
import { TOrderActions } from "./order";
import { TRefreshTokenActions } from "./refresh-token";
import { TRegisterActions } from "./register";
import { TResetPasswordActions } from "./reset-password";
import { TTabsActions } from "./tabs";
import { TWsFeedActions } from "./wsFeed";
import { TWsOrdersActions } from "./wsOrders";

export type TAppActions =
  | TAuthActions
  | TTabsActions
  | TResetPasswordActions
  | TRegisterActions
  | TRefreshTokenActions
  | TOrderActions
  | TModalActions
  | TIngredientsActions
  | TForgotPasswordActions
  | TWsFeedActions
  | TWsOrdersActions;
