"use client"
import { RootState } from '@/state/store';
import { RecipeType } from '@/types';
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import RecipeControls from '@/components/RecipeControls';

const RecipePage = ({ params }: { params: { recipeId: string } }) => {

  const router = useRouter()

  const firstInstructionRef = useRef<HTMLDivElement>(null);
  const lastInstructionRef = useRef<HTMLDivElement>(null);

  const [lineHeight, setLineHeight] = useState(0)
  const [lineTop, setLineTop] = useState(0)

  useEffect(() => {
    if (firstInstructionRef.current && lastInstructionRef.current) {
      setLineHeight(lastInstructionRef.current.getBoundingClientRect().bottom - firstInstructionRef.current?.getBoundingClientRect().top - firstInstructionRef.current?.getBoundingClientRect().height / 2 - lastInstructionRef.current?.getBoundingClientRect().height / 2)
      setLineTop(firstInstructionRef.current?.getBoundingClientRect().height / 2)
    }
  }, [firstInstructionRef.current, lastInstructionRef.current])

  const { recipes } = useSelector((state: RootState) => state.allRecipes);

  const recipe: RecipeType | null = useMemo(() => {
    if (recipes) {
      const recipeIndex = recipes.findIndex((recipe) => recipe.id === Number(params.recipeId))
      return recipeIndex !== -1 ? recipes[recipeIndex] : null
    }
    return null
  }, [recipes, params.recipeId])

  if (!recipe) return <h1>Loading</h1>

  return (
    <main className="flex min-h-screen flex-col items-center p-3 bg-[#EFEFEF]">
      <div className="flex gap-4 bg-white px-10 py-4 text-2xl w-full font-medium">
        <Image src="/back.svg" alt="Back icon" width={20} height={20} className='cursor-pointer' onClick={() => router.push('/')} />
        {recipe.name}
      </div>
      <div className="flex flex-row gap-3 mt-3 w-full h-full flex-1 items-stretch">
        <aside className="w-[40ch] flex flex-col gap-3 items-center">
          <AsideCard title='Кухня' fillEmptySpace={false}>
            {recipe.cuisine}
          </AsideCard>
          <AsideCard title='Теги' fillEmptySpace={false}>
            <div className='flex gap-x-3 opacity-60 flex-wrap' >
              {recipe.tags.map((tag, index) => <h4 className='whitespace-nowrap' key={`${tag}${index}`}>#{tag}</h4>)}
            </div>
          </AsideCard>
          <AsideCard title='Калорийность' fillEmptySpace={false}>
            <div className='space-y-1'>
              <p>{recipe.caloriesPerServing} ккал</p>
              <p className='opacity-60'>100 грамм</p>
            </div>
          </AsideCard>
          <AsideCard title='Количество порций' fillEmptySpace={false}>
            <p className='font-semibold'>{recipe.servings}</p>
          </AsideCard>
          <AsideCard title='Описание' fillEmptySpace={true}>
            <p className='opacity-60 text-sm'>
              Насладитесь великолепным вкусом запеченной мясной туши с травами, овощами и нежным картофельным пюре.
              Это блюдо признано классикой и пользуется популярностью благодаря своему неповторимому вкусу и универсальному
              признанию.
            </p>
          </AsideCard>
        </aside>

        <aside className="w-[40ch] flex flex-col gap-3 items-center">
          <AsideCard title='Общее время приготовления' fillEmptySpace={false}>
            <p>{recipe.cookTimeMinutes + recipe.prepTimeMinutes} минут</p>
          </AsideCard>

          <AsideCard title='Инструкция по приготовлению' fillEmptySpace={true}>
            <div className='relative flex flex-col gap-4'>
              <div className='absolute left-[7px] w-[2px] bg-gray-300' style={{ height: `${lineHeight}px`, top: `${lineTop}px` }}></div>
              {recipe.instructions.map((instruction, index) => {
                return (
                  <div ref={index === 0 ? firstInstructionRef : index === recipe.instructions.length - 1 ? lastInstructionRef : null} key={`instruction${index}`} className='flex gap-4 items-center text-balance'>

                    <div className='flex justify-center items-center bg-blue-500 rounded-full h-4 w-4 shrink-0 z-20'>
                      <div className='bg-white rounded-full h-2 w-2'>

                      </div>
                    </div>
                    <p>{instruction}</p>
                  </div>
                )
              })}
            </div>
          </AsideCard>
        </aside>

        <div className="flex flex-col justify-between gap-4 flex-1 bg-[#F9F9F9] p-4">

          <div className="relative max-h-fit flex-1 overflow-hidden">
            <Image
              alt="Meal Image"
              src={recipe.image}
              fill
              sizes='100%'
              className="object-cover rounded-[2px]"
            />
          </div>

          <RecipeControls recipeId={params.recipeId} />
        </div>

      </div>
    </main >
  )
}

const AsideCard = ({ children, title, fillEmptySpace }: { children: React.ReactNode, title: string, fillEmptySpace: boolean }) => {
  return (
    <div className={cn('w-full bg-white', fillEmptySpace ? 'flex-1' : null)}>
      <h1 className='border-b px-10 py-4 font-medium text-xl'>{title}</h1>
      <div className='px-10 py-6'>
        {children}
      </div>
    </div>

  )
}

export default RecipePage