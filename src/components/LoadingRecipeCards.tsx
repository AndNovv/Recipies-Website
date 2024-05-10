import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

const LoadingRecipeCards = () => {
    return (
        <>
            <Skeleton className="w-full max-w-[450px] h-80 rounded-[2px]" />
            <Skeleton className="w-full max-w-[450px] h-80 rounded-[2px]" />
            <Skeleton className="w-full max-w-[450px] h-80 rounded-[2px]" />
            <Skeleton className="w-full max-w-[450px] h-80 rounded-[2px]" />
        </>
    )
}

export default LoadingRecipeCards