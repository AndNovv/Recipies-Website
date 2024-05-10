"use client"
import { fetchAllRecipes } from '@/state/allRecipes/allRecipesSlice'
import { AppDispatch } from '@/state/store'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const AllRecipesProvider = ({ children }: { children: React.ReactNode }) => {

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchAllRecipes())
    }, [dispatch])

    return (
        <>
            {children}
        </>
    )
}

export default AllRecipesProvider