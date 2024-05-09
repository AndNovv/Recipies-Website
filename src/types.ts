
export type RecipeType = {
    title: string
    description: string
    time: number
    difficulty: 'easy' | 'medium' | 'hard'
    country: string
    foodType: string[]
}