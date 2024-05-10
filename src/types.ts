
// export type RecipeType = {
//     title: string
//     description: string
//     time: number
//     difficulty: 'easy' | 'medium' | 'hard'
//     country: string
//     foodType: string[]
// }

export type RecipeType = {
    caloriesPerServing: number
    cookTimeMinutes: number
    cuisine: string
    difficulty: string
    id: number
    image: string
    ingredients: string[]
    instructions: string[]
    mealType: string[]
    name: string
    prepTimeMinutes: number
    rating: number
    reviewCount: number
    servings: number
    tags: string[]
    userId: number
}