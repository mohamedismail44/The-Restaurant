import { useDispatch } from "react-redux";
import { fetchData, fetchDefirantCat } from "../Redux/Features/RecipesSlice";

export default function Category() {
  const dispatch = useDispatch();

  // "Chicken",    "Dessert",    "Lamb",    "Miscellaneous",    "Pasta",    "Seafood",
  // "Side",    "Starter",    "Vegan",    "Vegetarian",    "Breakfast",    "Goat",

  return (
    <div className="px-20 py-10">
      <div
        className=" border text-white md:text-lg
       text-sm text-center border-primary rounded-tl-[70px]
        rounded-br-[70px] p-3"
      >
        <div className="">
          <button
            onClick={() => dispatch(fetchData(""))}
            className="bg-primary rounded-tl-full rounded-br-full font-medium px-12 py-2 "
          >
            All Recipes
          </button>
        </div>

        <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2  ">
          <div className="">
            <button
              onClick={() => dispatch(fetchData("Chicken"))}
              className="bg-primary  rounded-tl-full rounded-br-full font-medium md:px-4 px-2 py-1 mr-3 my-1 "
            >
              Chicken
            </button>
          </div>
          <div className="">
            <button
              onClick={() => dispatch(fetchData("chicken_breast"))}
              className="bg-primary  rounded-tl-full rounded-br-full font-medium md:px-4 px-2 py-1 mr-3 my-1 "
            >
              chicken breast
            </button>
          </div>
          <div className="">
            <button
              onClick={() => dispatch(fetchData("egg"))}
              className="bg-primary  rounded-tl-full rounded-br-full font-medium md:px-4 px-2 py-1 mr-3 my-1 "
            >
              egg
            </button>
          </div>
          <div className="">
            <button
              onClick={() => dispatch(fetchData("salmon"))}
              className="bg-primary  rounded-tl-full rounded-br-full font-medium md:px-4 px-2 py-1 mr-3 my-1 "
            >
              salmon
            </button>
          </div>
          <div className="">
            <button
              onClick={() => dispatch(fetchDefirantCat("Pasta"))}
              className="bg-primary  rounded-tl-full rounded-br-full font-medium md:px-4 px-2 py-1 mr-3 my-1 "
            >
              Pasta
            </button>
          </div>
          <div className="">
            <button
              onClick={() => dispatch(fetchDefirantCat("Seafood"))}
              className="bg-primary  rounded-tl-full rounded-br-full font-medium md:px-4 px-2 py-1 mr-3 my-1 "
            >
              Seafood
            </button>
          </div>
          <div className="">
            <button
              onClick={() => dispatch(fetchDefirantCat("Side"))}
              className="bg-primary  rounded-tl-full rounded-br-full font-medium md:px-4 px-2 py-1 mr-3 my-1 "
            >
              Side
            </button>
          </div>
          <div className="">
            <button
              onClick={() => dispatch(fetchDefirantCat("Starter"))}
              className="bg-primary  rounded-tl-full rounded-br-full font-medium md:px-4 px-2 py-1 mr-3 my-1 "
            >
              Starter
            </button>
          </div>
          <div className="">
            <button
              onClick={() => dispatch(fetchDefirantCat("Vegan"))}
              className="bg-primary  rounded-tl-full rounded-br-full font-medium md:px-4 px-2 py-1 mr-3 my-1 "
            >
              Vegan
            </button>
          </div>
          <div className="">
            <button
              onClick={() => dispatch(fetchDefirantCat("Vegetarian"))}
              className="bg-primary  rounded-tl-full rounded-br-full font-medium md:px-4 px-2 py-1 mr-3 my-1 "
            >
              Vegetarian
            </button>
          </div>
          <div className="">
            <button
              onClick={() => dispatch(fetchDefirantCat("Breakfast"))}
              className="bg-primary  rounded-tl-full rounded-br-full font-medium md:px-4 px-2 py-1 mr-3 my-1 "
            >
              Breakfast
            </button>
          </div>
          <div className="">
            <button
              onClick={() => dispatch(fetchDefirantCat("Goat"))}
              className="bg-primary  rounded-tl-full rounded-br-full font-medium md:px-4 px-2 py-1 mr-3 my-1 "
            >
              Goat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
