import { useDispatch } from "react-redux";
import { fetchData, fetchDefirantCat } from "../Redux/Features/RecipesSlice";

export default function CatList() {
  const dispatch = useDispatch();

  // "Chicken",    "Dessert",    "Lamb",    "Miscellaneous",    "Pasta",    "Seafood",
  // "Side",    "Starter",    "Vegan",    "Vegetarian",    "Breakfast",    "Goat",

  return (
    <div className="">
      <fieldset className="text-xl max-w-sm border-4 border-primary rounded-lg p-2">
        <legend className="px-2 text-xl font-semibold underline decoration-primary decoration-2">
          Food List
        </legend>
        <div className="flex flex-col gap-2 px-2 text-md font-serif">
          <button className="bg-primary rounded-md py-2 hover:bg-primaryHover " onClick={() => dispatch(fetchData(""))}>Show All Recipes food</button>

          <hr />

          <button onClick={() => dispatch(fetchDefirantCat("Chicken"))}>
            Gynecology
          </button>
          <hr />
          <button onClick={() => dispatch(fetchDefirantCat("Dessert"))}>
            Dessert
          </button>
          <hr />
          <button onClick={() => dispatch(fetchDefirantCat("Lamb"))}>
            Lamb
          </button>
          <hr />
          <button onClick={() => dispatch(fetchDefirantCat("Miscellaneous"))}>
            Miscellaneous
          </button>
          <hr />
          <button onClick={() => dispatch(fetchDefirantCat("Pasta"))}>
            Pasta
          </button>
          <hr />
          <button onClick={() => dispatch(fetchDefirantCat("Seafood"))}>
            Seafood
          </button>
          <hr />
          <button onClick={() => dispatch(fetchDefirantCat("Side"))}>
            Side
          </button>
          <hr />
          <button onClick={() => dispatch(fetchDefirantCat("Starter"))}>
            Starter
          </button>
          <hr />
          <button onClick={() => dispatch(fetchDefirantCat("Vegan"))}>
            Vegan
          </button>
          <hr />
          <button onClick={() => dispatch(fetchDefirantCat("Vegetarian"))}>
            Vegetarian
          </button>
          <hr />
          <button onClick={() => dispatch(fetchDefirantCat("Breakfast"))}>
            Breakfast
          </button>
          <hr />
          <button onClick={() => dispatch(fetchDefirantCat("Goat"))}>
            Goat
          </button>
          <hr />
          <button onClick={() => dispatch(fetchData("chicken_breast"))}>
            chicken breast
          </button>
          <hr />
          <button onClick={() => dispatch(fetchData("egg"))}>egg</button>
          <hr />
          <button onClick={() => dispatch(fetchData("salmon"))}>salmon</button>
        </div>
      </fieldset>
    </div>
  );
}
