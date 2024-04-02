import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AllRecipes, fetchDetails } from "../Redux/Features/RecipesSlice";
import { useEffect } from "react";

export default function Details() {
  let params = useParams();
  const RRecipes = useSelector(AllRecipes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetails(params.id));
  }, [dispatch, params.id]);

  return (
    <div className="">
      <div>
        {RRecipes.details.map((ele, index) =>
          ele.strCategory === "Pork" ? (
            <div key={index} className="text-center my-32">
              <div className="relative inline-block w-[60%] ">
                <span className="text-2xl md:text-3xl font-bold">
                  Sorry, my friend, this recipe contains pork, which is
                  forbidden in Islamic law.
                  <br />
                  Please browse another recipe.
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
              </div>
            </div>
          ) : (
            <div key={index} className="">
              <div className="bg-gray-100 dark:bg-gray-800 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                      <div className="h-[460px] rounded-lg my-4 bg-gray-300 dark:bg-gray-700 mb-4">
                        <img
                          className="w-full h-full object-cover"
                          src={ele.strMealThumb}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="md:flex-1 px-4">
                      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        {ele.strMeal}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        {ele.strInstructions}
                      </p>
                      <div className="flex mb-4"></div>
                      <div className="mb-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">
                          Recipe Country
                        </span>
                        <div className="flex items-center mt-2">
                          <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                            {ele.strArea}
                          </button>
                        </div>
                      </div>
                      <div className="mb-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">
                          Recipe Category
                        </span>
                        <div className="flex items-center mt-2">
                          <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                            {ele.strCategory}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
