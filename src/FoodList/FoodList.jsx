import CatList from "../components/CatList";
import RecipesCat from "../components/RecipesCat";

export default function FoodList() {
  return (
    <div className="">
      <div className="flex items-center mt-8">
        <div className="border-t border-4 border-primary flex-grow"></div>
        <div className="px-3 text-gray-800 font-bold text-2xl">Food List</div>
        <div className="border-t border-4 border-primary flex-grow"></div>
      </div>
      <div className="px-8 py-6">
        <div className="md:flex">
          <div className=" md:w-[20%] ">
            <CatList />
          </div>
          <div className="w-full md:w-[80%]">
            <RecipesCat />
          </div>
        </div>
      </div>
    </div>
  );
}
