import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllRecipes, fetchData } from "../Redux/Features/RecipesSlice";
import { Link } from "react-router-dom";

export default function RecipesCat() {
  const RRecipes = useSelector(AllRecipes);
  const dispatch = useDispatch();
  const [Num, setNum] = useState(8);
  useEffect(() => {
    dispatch(fetchData(""));
  }, [dispatch]);

  return (
    <div className="md:px-20 md:py-10 px-5 py-3">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {RRecipes.Recipes.slice(0, Num).map((ele, index) => (
          <div key={index} className="m-2 rounded-lg">
            <Link
              className="p-4 max-w-lg border border-primary rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
              to={`/details/${ele.idMeal}`}
            >
              <img
                className="shadow rounded-lg overflow-hidden border"
                src={ele?.strMealThumb}
                alt=""
              />
              <div className="mt-8">
                <h4 className="line-clamp-2 font-bold sm:text-xl text-lg ">
                  {ele.strMeal}
                </h4>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="text-white text-center m-4">
        <button
          className="bg-primary hover:bg-primaryHover rounded-tl-full rounded-br-full font-medium px-12 py-2 "
          onClick={() => setNum(Num + 4)}
        >
          Show More Recipes
        </button>
      </div>
    </div>
  );
}
