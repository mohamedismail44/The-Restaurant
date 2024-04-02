import React, { useEffect } from "react";
import RecipesCat from "../components/RecipesCat";
import { fetchDefirantCat } from "../Redux/Features/RecipesSlice";
import { useDispatch } from "react-redux";

export default function Healthy() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDefirantCat("Vegetarian"));
  }, [dispatch]);

  return (
    <div>
      <div className="flex items-center mt-8">
        <div className="border-t border-4 border-primary flex-grow"></div>
        <div className="px-3 text-gray-800 font-bold text-2xl">Healthy Food</div>
        <div className="border-t border-4 border-primary flex-grow"></div>
      </div>

      <RecipesCat />
    </div>
  );
}
