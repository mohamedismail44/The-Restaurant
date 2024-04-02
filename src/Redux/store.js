import { configureStore } from "@reduxjs/toolkit";
import RecipesSlice from "./Features/RecipesSlice";

const store = configureStore({
  reducer: {
    Recipes: RecipesSlice,
  },
});
export default store;
