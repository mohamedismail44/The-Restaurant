import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllRecipes, fetchData } from "../Redux/Features/RecipesSlice";
import { Link } from "react-router-dom";

export default function RecipesList() {
  const [Category, setCategory] = useState("");
  const RRecipes = useSelector(AllRecipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData(Category));
  }, [dispatch, Category]);

  return (
    <div className="px-20 py-10">
      <div className="grid grid-cols-6">
        {RRecipes.Recipes.map((ele, index) => (
          <div key={index} className="m-2 rounded-lg">
            <Link to={`/details/${ele.idMeal}`}>
              <img src={ele?.strMealThumb} alt="" />
            </Link>
          </div>
        ))}
      </div>
      <button onClick={() => setCategory("egg")} className="px-56 bg-red-800">
        dff
      </button>
    </div>
  );
}
