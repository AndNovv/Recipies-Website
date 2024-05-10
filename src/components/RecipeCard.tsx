import { RecipeType } from '@/types';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

const RecipeCard = ({ recipe }: { recipe: RecipeType }) => {

    const router = useRouter()

    const difficultyToNumber = {
        Easy: 1,
        Medium: 2,
        Hard: 3,
    } as const

    const difficulty = recipe.difficulty as keyof typeof difficultyToNumber;
    const filledStars = Array.from({ length: difficultyToNumber[difficulty] }).fill('★');
    const emptyStars = Array.from({ length: 3 - difficultyToNumber[difficulty] }).fill('☆');

    return (
        <div onClick={() => router.push(`/recipe/${recipe.id}`)} className="flex max-w-[450px] h-80 bg-white text-md rounded-[2px] border cursor-pointer">
            <div className='flex flex-col h-full w-1/2'>
                <div className='flex items-center h-[70px]'>
                    <h2 className='text-lg px-6 font-medium text-balance'>{recipe.name}</h2>
                </div>
                <div className="relative w-full flex-1">
                    <Image
                        alt="Recipe Image"
                        src={recipe.image}
                        fill
                        className="object-cover rounded-[2px]"
                    />
                </div>
            </div>

            <div className='w-1/2 h-full flex flex-col justify-between p-6'>

                <p className='text-sm cutoff-text self=start text-balance'>
                    Насладитесь великолепным вкусом запеченной мясной туши с травами, овощами и нежным картофельным пюре.
                    Это блюдо признано классикой и пользуется популярностью благодаря своему неповторимому вкусу и универсальному
                    признанию. Каждый кусочек — это сочетание сочной мякоти, ароматных трав и нежного пюре, создающее кулинарное
                    произведение, которым восхищаются гурманы во всем мире. Неважно, где вы находитесь — за семейным столом или в
                    уединении, это блюдо обещает утолить ваши желания и подарить чувство уюта и радости с каждым восхитительным кусочком.
                </p>

                <div className='flex flex-col gap-2'>

                    <div className='flex gap-2'>
                        <Image
                            alt='Clock Icon'
                            src='/time.svg'
                            width={24}
                            height={24}
                        />
                        <span>{recipe.cookTimeMinutes + recipe.prepTimeMinutes} минут</span>
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

                    <h4>{recipe.cuisine}</h4>

                    <div className='flex gap-x-2 flex-wrap'>
                        {recipe.mealType.map((tag, index) => <div className='flex' key={`${tag}${index}`}><h4 className='whitespace-nowrap'>{tag}</h4><span className={index !== recipe.mealType.length - 1 ? 'block' : 'hidden'}>,</span></div>)}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RecipeCard