import { ingredientsReducer } from "./ingredients";
import * as Constants from "../constants";
import { TIngredient } from "../types/data";
import { NavigateFunction } from "react-router-dom";

describe("ingredients reducer tests", () => {
  it("should return the initial state", () => {
    const expectedState = {
      ingredients: [],
      constructorIngredients: { bun: null, ingredients: [] },
      selectedIngredient: null,

      getIngredientsRequest: false,
      getIngredientsError: false,
      error: "",
    };

    expect(ingredientsReducer(undefined, {})).toEqual(expectedState);
  });

  it("should handle GET_INGREDIENTS_REQUEST", () => {
    expect(
      ingredientsReducer(undefined, {
        type: Constants.GET_INGREDIENTS_REQUEST,
      })
    ).toEqual({
      ingredients: [],
      constructorIngredients: { bun: null, ingredients: [] },
      selectedIngredient: null,

      getIngredientsRequest: true,
      getIngredientsError: false,
      error: "",
    });
  });

  it("should handle GET_INGREDIENTS_FAILED", () => {
    expect(
      ingredientsReducer(undefined, {
        type: Constants.GET_INGREDIENTS_FAILED,
      })
    ).toEqual({
      ingredients: [],
      constructorIngredients: { bun: null, ingredients: [] },
      selectedIngredient: null,

      getIngredientsRequest: false,
      getIngredientsError: true,
      error: "",
    });
  });

  it("should handle GET_INGREDIENTS_SUCCESS", () => {
    const mockIngredients: Array<TIngredient> = [
      {
        _id: "_id",
        name: "name",
        type: "type",
        proteins: 1,
        fat: 2,
        carbohydrates: 3,
        calories: 4,
        price: 5,
        image: "image",
        image_mobile: "image_mobile",
      },
    ];

    expect(
      ingredientsReducer(undefined, {
        type: Constants.GET_INGREDIENTS_SUCCESS,
        items: mockIngredients,
      })
    ).toEqual({
      ingredients: mockIngredients,
      constructorIngredients: { bun: null, ingredients: [] },
      selectedIngredient: null,

      getIngredientsRequest: false,
      getIngredientsError: false,
      error: "",
    });
  });

  it("should handle add ingredient to burger constructor.", () => {
    const initialState = {
      ingredients: [
        {
          _id: "_id",
          name: "name",
          type: "bun",
          proteins: 1,
          fat: 2,
          carbohydrates: 3,
          calories: 4,
          price: 5,
          image: "image",
          image_mobile: "image_mobile",
        },
      ],
      constructorIngredients: { bun: null, ingredients: [] },
      selectedIngredient: null,

      getIngredientsRequest: false,
      getIngredientsError: false,
      error: "",
    };

    expect(
      // Добавляем ингредиент с указанным id в BurgerConstructor.
      ingredientsReducer(initialState, {
        type: Constants.ADD_INGREDIENT,
        id: "_id",
        key: "key",
      })
    ).toEqual({
      ingredients: [
        {
          _id: "_id",
          name: "name",
          type: "bun",
          proteins: 1,
          fat: 2,
          carbohydrates: 3,
          calories: 4,
          price: 5,
          image: "image",
          image_mobile: "image_mobile",
        },
      ],
      constructorIngredients: {
        bun: {
          _id: "_id",
          name: "name",
          type: "bun",
          proteins: 1,
          fat: 2,
          carbohydrates: 3,
          calories: 4,
          price: 5,
          image: "image",
          image_mobile: "image_mobile",
        },
        ingredients: [],
      },
      selectedIngredient: null,

      getIngredientsRequest: false,
      getIngredientsError: false,
      error: "",
    });
  });

  it("Should handle remove ingredient from burger constructor.", () => {
    const initialState = {
      ingredients: [],
      constructorIngredients: {
        bun: {},
        ingredients: [
          {
            key: "key",
            _id: "_id",
            name: "name",
            type: "bun",
            proteins: 1,
            fat: 2,
            carbohydrates: 3,
            calories: 4,
            price: 5,
            image: "image",
            image_mobile: "image_mobile",
          },
        ],
      },
      selectedIngredient: null,

      getIngredientsRequest: false,
      getIngredientsError: false,
      error: "",
    };

    expect(
      ingredientsReducer(initialState, {
        type: Constants.REMOVE_INGREDIENT,
        index: 0,
      })
    ).toEqual({
      ingredients: [],
      constructorIngredients: {
        bun: {},
        ingredients: [],
      },
      selectedIngredient: null,

      getIngredientsRequest: false,
      getIngredientsError: false,
      error: "",
    });
  });

  it("Should open ingredients details.", () => {
    const initialState = {
      ingredients: [
        {
          _id: "_id",
          name: "name",
          type: "bun",
          proteins: 1,
          fat: 2,
          carbohydrates: 3,
          calories: 4,
          price: 5,
          image: "image",
          image_mobile: "image_mobile",
        },
      ],
      constructorIngredients: {
        bun: {},
        ingredients: [],
      },
      selectedIngredient: null,

      getIngredientsRequest: false,
      getIngredientsError: false,
      error: "",
    };

    expect(
      ingredientsReducer(initialState, {
        type: Constants.OPEN_INGREDIENTS_DETAILS,
        ingredientId: "_id",
      })
    ).toEqual({
      ingredients: [
        {
          _id: "_id",
          name: "name",
          type: "bun",
          proteins: 1,
          fat: 2,
          carbohydrates: 3,
          calories: 4,
          price: 5,
          image: "image",
          image_mobile: "image_mobile",
        },
      ],
      constructorIngredients: {
        bun: {},
        ingredients: [],
      },
      selectedIngredient: {
        _id: "_id",
        name: "name",
        type: "bun",
        proteins: 1,
        fat: 2,
        carbohydrates: 3,
        calories: 4,
        price: 5,
        image: "image",
        image_mobile: "image_mobile",
      },

      getIngredientsRequest: false,
      getIngredientsError: false,
      error: "",
    });
  });

  //   it("Should close ingredients details.", () => {
  //     jest.mock("react-router-dom");

  //     const initialState = {
  //       ingredients: [
  //         {
  //           _id: "_id",
  //           name: "name",
  //           type: "bun",
  //           proteins: 1,
  //           fat: 2,
  //           carbohydrates: 3,
  //           calories: 4,
  //           price: 5,
  //           image: "image",
  //           image_mobile: "image_mobile",
  //         },
  //       ],
  //       constructorIngredients: {
  //         bun: {},
  //         ingredients: [],
  //       },
  //       selectedIngredient: {
  //         _id: "_id",
  //         name: "name",
  //         type: "bun",
  //         proteins: 1,
  //         fat: 2,
  //         carbohydrates: 3,
  //         calories: 4,
  //         price: 5,
  //         image: "image",
  //         image_mobile: "image_mobile",
  //       },

  //       getIngredientsRequest: false,
  //       getIngredientsError: false,
  //       error: "",
  //     };

  //     expect(
  //       ingredientsReducer(initialState, {
  //         type: Constants.CLOSE_INGREDIENTS_DETAILS,
  //         // navigateHook = NavigateH
  //       })
  //     ).toEqual({
  //       ingredients: [
  //         {
  //           _id: "_id",
  //           name: "name",
  //           type: "bun",
  //           proteins: 1,
  //           fat: 2,
  //           carbohydrates: 3,
  //           calories: 4,
  //           price: 5,
  //           image: "image",
  //           image_mobile: "image_mobile",
  //         },
  //       ],
  //       constructorIngredients: {
  //         bun: {},
  //         ingredients: [],
  //       },
  //       selectedIngredient: null,

  //       getIngredientsRequest: false,
  //       getIngredientsError: false,
  //       error: "",
  //     });
  //   });
});
