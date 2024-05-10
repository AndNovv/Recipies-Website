"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"

import { useEffect, useMemo, useState } from "react";
import RecipeCard from "@/components/RecipeCard"

import CuisineSelect from "@/components/CuisineSelect"
import DifficultyToggle from "@/components/DifficultyToggle";
import PaginationElement from "@/components/PaginationElement";
import { usePathname, useRouter } from "next/navigation";
import { RecipeType } from "@/types";
import MealTypeSelect from "@/components/MealTypeSelect";
import { RootState } from "@/state/store";
import { useSelector } from "react-redux";
import LoadingRecipeCards from "@/components/LoadingRecipeCards";
import { RECIPES_PER_PAGE } from "@/data/data";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    cuisine?: string;
    mealType?: string;
    difficulty?: string;
  };
}) {

  const router = useRouter()

  const currentPage = Number(searchParams?.page) || 1;
  const cuisineQuery = searchParams?.cuisine || 'all';
  const mealTypeQuery = searchParams?.mealType || 'all';
  const difficultyQuery = searchParams?.difficulty || 'Any';

  const { recipes } = useSelector((state: RootState) => state.allRecipes)

  const [cuisine, setCuisine] = useState(cuisineQuery)
  const [mealType, setMealType] = useState(mealTypeQuery)
  const [difficulty, setDifficulty] = useState(difficultyQuery)

  const [numberOfFoundRecipes, setNumberOfFoundRecipes] = useState(0)

  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    params.set('cuisine', String(cuisine));
    params.set('mealType', String(mealType));
    params.set('difficulty', String(difficulty));
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [cuisine, mealType, difficulty])


  const currentDisplayedRecipes: RecipeType[] | null = useMemo(() => {
    if (recipes) {
      const filteredRecipes = recipes.filter((el: RecipeType) => (cuisineQuery === 'all' || el.cuisine === cuisineQuery) && (mealTypeQuery === 'all' || el.mealType.includes(mealTypeQuery)) && (difficultyQuery === 'Any' || el.difficulty === difficultyQuery))
      setNumberOfFoundRecipes(filteredRecipes.length)
      return filteredRecipes.slice((currentPage - 1) * RECIPES_PER_PAGE, currentPage * RECIPES_PER_PAGE)
    }
    return null
  }, [currentPage, cuisineQuery, mealTypeQuery, difficultyQuery, recipes])


  return (
    <main className="flex min-h-screen flex-col items-center p-3 bg-[#EFEFEF]">
      <div className="bg-white px-10 py-4 text-2xl w-full font-medium">Сборник рецептов из разных стран мира</div>

      <div className="flex flex-row gap-3 mt-3 w-full h-full flex-1 items-stretch">
        <aside className="w-[50ch] bg-white flex flex-col justify-between gap-3 items-center p-8">

          <div className="relative w-full h-40">
            <Image
              alt="Food Image"
              src="/food.jpg"
              fill
              className="object-cover rounded-[2px]"
            />
          </div>

          <div className="text-sm space-y-4 text-balance">
            <p>В нашей жизни, когда время становится все более ценным ресурсом, задача планирования приема пищи становится все более сложной.</p>
            <p>Часто мы сталкиваемся с дилеммой: что приготовить на завтрак, обед или ужин? Каким образом мы можем легко и быстро определиться с выбором блюда и не тратить много времени на принятие этого решения?</p>
            <p>Наш сервис поможет: выбирайте параметры - и вперед!</p>
          </div>

          <div className="w-full space-y-2">

            <div className="flex space-x-4 justify-end items-center w-full mt-8">
              <p className="font-bold text-end">Кухня:</p>
              <CuisineSelect cuisine={cuisine} setCuisine={setCuisine} />
            </div>
            <div className="flex space-x-4 justify-end items-center w-full">
              <p className="font-bold text-end">Тип блюда:</p>
              <MealTypeSelect mealType={mealType} setMealType={setMealType} />
            </div>
            <div className="flex space-x-4 justify-end items-center w-full">
              <p className="font-bold text-end w-min">Сложность приготовления:</p>
              <DifficultyToggle difficulty={difficulty} setDifficulty={setDifficulty} />
            </div>

            <Button
              variant="link"
              className="text-blue-700 self-start px-0"
              onClick={() => { setCuisine('all'); setMealType('all'); setDifficulty('Any') }}>
              Сбросить все фильтры
            </Button>
          </div>


          <div className="self-start mt-6 space-y-4">
            <p className="text-sm text-gray-600">А еще можно попробовать на вкус удачу</p>
            <Button variant={'outline'} onClick={recipes ? () => router.push(`/recipe/${Math.floor(Math.random() * recipes.length)}`) : () => { }}>Мне повезёт!</Button>
          </div>

        </aside>


        <div className="flex flex-col flex-1 h-[calc()]">

          <div className="w-full bg-white flex items-center py-4 px-10 space-x-3">
            <h1 className="text-xl">Найденные рецепты</h1>
            <span className="text-gray-600/50 font-semibold">{numberOfFoundRecipes}</span>
          </div>

          <div className="flex flex-col justify-between gap-4 h-[46.5rem] bg-[#F9F9F9] p-4">
            <div className="flex flex-wrap gap-x-3 gap-y-2 items-center justify-center">
              {currentDisplayedRecipes ?
                currentDisplayedRecipes.map((recipe) => <RecipeCard key={`Recipe of ${recipe.name}`} recipe={recipe} />) :
                <LoadingRecipeCards />
              }
            </div>
            <PaginationElement searchParams={searchParams} numberOfFoundRecipes={numberOfFoundRecipes} />
          </div>

        </div>

      </div>
    </main>
  );
}
