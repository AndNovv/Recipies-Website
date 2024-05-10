import { cn } from '@/lib/utils'
import React from 'react'
import RecipeControls from './RecipeControls'
import { Skeleton } from './ui/skeleton'
import Image from 'next/image'

const LoadingRecipePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-3 bg-[#EFEFEF]">
      <div className="flex gap-4 bg-white px-10 py-4 text-2xl w-full font-medium items-center">
        <Image src="/back.svg" alt="Back icon" width={20} height={20} className='cursor-pointer' />
        <Skeleton className='w-1/3 h-2 my-3' />
      </div>
      <div className="flex flex-row gap-3 mt-3 w-full h-full flex-1 items-stretch">
        <aside className="w-[40ch] flex flex-col gap-3 items-center">
          <AsideCard title='Кухня' fillEmptySpace={false}>
            <Skeleton className='w-1/2 h-2' />
          </AsideCard>
          <AsideCard title='Теги' fillEmptySpace={false}>
            <div className='flex gap-x-3 opacity-60 flex-wrap' >
              <Skeleton className='w-1/4 h-2' />
              <Skeleton className='w-1/4 h-2' />
              <Skeleton className='w-1/4 h-2' />
            </div>
          </AsideCard>
          <AsideCard title='Калорийность' fillEmptySpace={false}>
            <div className='space-y-3'>
              <Skeleton className='w-1/3 h-2' />
              <Skeleton className='w-1/4 h-2' />

            </div>
          </AsideCard>
          <AsideCard title='Количество порций' fillEmptySpace={false}>
            <Skeleton className='w-1/6 h-2' />
          </AsideCard>
          <AsideCard title='Описание' fillEmptySpace={true}>
            <div className='space-y-3'>
              <Skeleton className='w-full h-2' />
              <Skeleton className='w-full h-2' />
              <Skeleton className='w-full h-2' />
            </div>
          </AsideCard>
        </aside>

        <aside className="w-[40ch] flex flex-col gap-3 items-center">
          <AsideCard title='Общее время приготовления' fillEmptySpace={false}>
            <Skeleton className='w-1/2 h-2' />
          </AsideCard>

          <AsideCard title='Инструкция по приготовлению' fillEmptySpace={true}>
            <div className='relative flex flex-col gap-4'>
              <Skeleton className='w-full h-2' />
              <Skeleton className='w-full h-2' />
              <Skeleton className='w-full h-2' />
              <Skeleton className='w-full h-2' />
              <Skeleton className='w-full h-2' />
            </div>
          </AsideCard>
        </aside>

        <div className="flex flex-col justify-between gap-4 flex-1 bg-[#F9F9F9] p-4">

          <div className="relative max-h-fit flex-1 overflow-hidden">
            <Skeleton className='w-full h-full' />
            {/* <Image
              alt="Meal Image"
              src={recipe.image}
              fill
              sizes='100%'
              className="object-cover rounded-[2px]"
            /> */}
          </div>

          <RecipeControls recipeId={"7"} />
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

export default LoadingRecipePage