import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

const RecipeControls = ({ recipeId }: { recipeId: string }) => {

    const router = useRouter()

    return (
        <div className='flex gap-2 justify-center select-none'>
            <Button disabled={recipeId === '1'} variant={'outline'} className='gap-1 pl-2.5 opacity-90' onClick={() => router.push(`/recipe/${Number(recipeId) - 1}`)}>
                <ChevronLeft className="h-4 w-4" />
                <p>Предыдущий</p>
            </Button>
            <Button disabled={recipeId === '50'} variant={'outline'} className='gap-1 pr-2.5 opacity-90' onClick={() => router.push(`/recipe/${Number(recipeId) + 1}`)}>
                <p>Следующий</p>
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>
    )
}

export default RecipeControls