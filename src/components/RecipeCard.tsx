import { cousineOptions, foodTypeOptions } from '@/data/data';
import { RecipeType } from '@/types';
import Image from 'next/image'
import React from 'react'

const RecipeCard = ({ recipe }: { recipe: RecipeType }) => {

    const difficultyToNumber = {
        easy: 1,
        medium: 2,
        hard: 3,
    } as const

    const difficulty = recipe.difficulty as keyof typeof difficultyToNumber;
    const filledStars = Array.from({ length: difficultyToNumber[difficulty] }).fill('★');
    const emptyStars = Array.from({ length: 3 - difficultyToNumber[difficulty] }).fill('☆');

    return (
        <div className="flex max-w-[450px] h-80 bg-white text-md rounded-[2px] border cursor-pointer">
            <div className='flex flex-col h-full w-1/2'>
                <div className='flex items-center h-[70px]'>
                    <h2 className='text-xl px-6 font-medium'>{recipe.title}</h2>
                </div>
                <div className="relative w-full flex-1">
                    <Image
                        alt="Recipe Image"
                        src="/food.webp"
                        fill
                        className="object-cover rounded-[2px]"
                    />
                </div>
            </div>

            <div className='w-1/2 h-full flex flex-col justify-between p-6'>

                <p className='text-sm cutoff-text self=start'>{recipe.description}</p>

                <div className='flex flex-col gap-3'>

                    <div className='flex gap-2'>
                        <Image
                            alt='Clock Icon'
                            src='/time.svg'
                            width={24}
                            height={24}
                        />
                        <span>{recipe.time} минут</span>
                    </div>

                    <div className='flex gap-2'>
                        <h4>Сложность:</h4>
                        <div className='flex space-x-1'>
                            {filledStars.map((_star, index) => (
                                <Image
                                    key={`star${index}`}
                                    src="/star.svg"
                                    alt="star"
                                    height={24}
                                    width={24}
                                />
                            ))}
                            {emptyStars.map((_star, index) => (
                                <Image
                                    key={`emptystar${index}`}
                                    src="/emptystar.svg"
                                    alt="star"
                                    height={24}
                                    width={24}
                                />
                            ))}
                        </div>
                    </div>

                    <h4>{cousineOptions.get(recipe.country)}</h4>

                    <div className='flex gap-2'>
                        {recipe.foodType.map((el, index) => <div className='flex' key={`${el}${index}`}><h4>{foodTypeOptions.get(el)}</h4><span className={index !== recipe.foodType.length - 1 ? 'block' : 'hidden'}>,</span></div>)}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RecipeCard