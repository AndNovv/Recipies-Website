"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"

import { useEffect, useMemo, useState } from "react";
import RecipeCard from "@/components/RecipeCard"

import { recipes } from "@/data/data"
import FoodTypeSelect from "@/components/FoodTypeSelect"
import CousineSelect from "@/components/CousineSelect"
import DifficultyToggle from "@/components/DifficultyToggle";
import PaginationElement from "@/components/PaginationElement";
import { usePathname, useRouter } from "next/navigation";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    cousine?: string;
    foodType?: string;
    difficulty?: string;
  };
}) {

  const currentPage = Number(searchParams?.page) || 1;
  const cousineQuery = searchParams?.cousine || 'all';
  const foodTypeQuery = searchParams?.foodType || 'all';
  const difficultyQuery = searchParams?.difficulty || 'any';


  const [cousine, setCousine] = useState('all')
  const [foodType, setFoodType] = useState('all')
  const [difficulty, setDifficulty] = useState('any')

  const [numberOffoundRecepies, setNumberOfFoundRecipes] = useState(0)

  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    params.set('cousine', String(cousine));
    params.set('foodType', String(foodType));
    params.set('difficulty', String(difficulty));
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [cousine, foodType, difficulty])

  const currecntDispayedRecipes = useMemo(() => {
    const filteredRecipes = recipes.filter((el) => (cousineQuery === 'all' || el.country === cousineQuery) && (foodTypeQuery === 'all' || el.foodType.includes(foodTypeQuery)) && (difficultyQuery === 'any' || el.difficulty === difficultyQuery))
    setNumberOfFoundRecipes(filteredRecipes.length)
    return filteredRecipes.slice((currentPage - 1) * 4, currentPage * 4)
  }, [currentPage, cousineQuery, foodTypeQuery, difficultyQuery])


  return (
    <main className="flex min-h-screen flex-col items-center p-3 bg-[#EFEFEF]">
      <div className="bg-white px-10 py-4 text-2xl w-full font-medium">Сборник рецептов из разных стран мира</div>

      <div className="flex flex-row gap-3 mt-3 w-full h-full flex-1 items-stretch">
        <aside className="w-[50ch] bg-white flex flex-col gap-3 items-center p-8">

          <div className="relative w-full h-40">
            <Image
              alt="Food Image"
              src="/food.webp"
              fill
              className="object-cover rounded-[2px]"
            />
          </div>

          <div className="text-sm space-y-3 text-balance">
            <p>В нашей жизни, когда время становится все более ценным ресурсом, задача планирования приема пищи становится все более сложной.</p>
            <p>Часто мы сталкиваемся с дилеммой: что приготовить на завтрак, обед или ужин? Каким образом мы можем легко и быстро определиться с выбором блюда и не тратить много времени на принятие этого решения?</p>
            <p>Наш сервис поможет: выбирайте параметры - и вперед!</p>
          </div>

          <div className="w-full space-y-2">

            <div className="flex space-x-4 justify-end items-center w-full mt-8">
              <p className="font-bold text-end">Кухня:</p>
              <CousineSelect cousine={cousine} setCousine={setCousine} />
            </div>
            <div className="flex space-x-4 justify-end items-center w-full">
              <p className="font-bold text-end">Тип блюда:</p>
              <FoodTypeSelect foodType={foodType} setFoodType={setFoodType} />
            </div>
            <div className="flex space-x-4 justify-end items-center w-full">
              <p className="font-bold text-end w-min">Сложность приготовления:</p>
              <DifficultyToggle difficulty={difficulty} setDifficulty={setDifficulty} />
            </div>

          </div>

          <Button
            variant="link"
            className="text-blue-700 self-start px-0"
            onClick={() => { setCousine('all'); setFoodType('all'); setDifficulty('any') }}>
            Сбросить все фильтры
          </Button>

          <div className="self-start mt-6 space-y-4">
            <p className="text-sm text-gray-600">А еще можно попробовать на вкус удачу</p>
            <Button variant={'outline'}>Мне повезёт!</Button>
          </div>

        </aside>


        <div className="flex flex-col flex-1">

          <div className="w-full bg-white flex items-center py-4 px-10 space-x-3">
            <h1 className="text-xl">Найденные рецепты</h1>
            <span className="text-gray-600/50 font-semibold">{numberOffoundRecepies}</span>
          </div>

          <div className="flex flex-col justify-between gap-4 flex-1 bg-[#F9F9F9] p-4">
            <div className="flex flex-wrap gap-x-3 gap-y-2 items-center justify-center">
              {currecntDispayedRecipes.map((el) => <RecipeCard key={`Recipe of ${el.title}`} recipe={el} />)}
            </div>
            <PaginationElement searchParams={searchParams} />
          </div>

        </div>

      </div>
    </main>
  );
}
