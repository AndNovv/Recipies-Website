import { RecipeType } from "@/types"
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialState: { recipes: RecipeType[] | null } = {
    recipes: null
}

const allRecipesSlice = createSlice({
    name: "allRecipes",
    initialState,
    reducers: {
        initAllRecipes: (state, action: PayloadAction<{ recipes: RecipeType[] }>) => {
            state.recipes = action.payload.recipes
        },
        resetCollection: () => {
            return {
                recipes: null
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllRecipes.pending, () => {
                console.log('fetchAllRecipes pending')
            })
            .addCase(fetchAllRecipes.fulfilled, (state, action: PayloadAction<RecipeType[] | undefined>) => {
                if (action.payload) {
                    state.recipes = action.payload
                }
                else {
                    console.log('Ошибка')
                }
            })
    }
})

export const fetchAllRecipes = createAsyncThunk(
    'allRecipes/fetchAllRecipes',
    async () => {
        try {
            const { data, status } = await axios('https://dummyjson.com/recipes?limit=0')
            if (status === 200) {
                return data.recipes as RecipeType[]
            }
        }
        catch (e) {
            console.log(e)
        }
    }
)

export const { initAllRecipes } = allRecipesSlice.actions

export default allRecipesSlice.reducer
