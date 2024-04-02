import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("Recipes/fetchData", async (cat) => {
  const res = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${cat}`
  );
  const data = res.data.meals;
  return data;
});

export const fetchDetails = createAsyncThunk(
  "Recipes/fetchDetails",
  async (id) => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = res.data.meals;
    return data;
  }
);

export const fetchDefirantCat = createAsyncThunk("Recipes/fetchDefirantCat", async (cat) => {
  const res = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`
  );
  const data = res.data.meals;
  return data;
});

const initialState = { Recipes: [], details: [], DefirantCat: [], status: null };
const RecipeSlice = createSlice({
  name: "Recipes",
  initialState,
  reducers: {
    testCat: (state, action) => {
      state.catName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.Recipes = action.payload;
      state.status = "sucsses fetch data";
    });
    builder.addCase(fetchData.pending, (state) => {
      state.status = "Loading Data";
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.status = "faild Data";
    });

    builder.addCase(fetchDetails.fulfilled, (state, action) => {
      state.details = action.payload;
      state.status = "sucsses fetch data";
    });

    builder.addCase(fetchDefirantCat.fulfilled, (state, action) => {
      state.Recipes = action.payload;
      state.status = "sucsses fetch data";
    });
  },
});
export default RecipeSlice.reducer;
export const {  testCat } = RecipeSlice.actions;
export const AllRecipes = (state) => state.Recipes;
