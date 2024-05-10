import React, { Dispatch, SetStateAction } from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { mealTypes } from '@/data/data'

const MealTypeSelect = ({ mealType, setMealType }: { mealType: string, setMealType: Dispatch<SetStateAction<string>> }) => {
    return (
        <Select onValueChange={(value: string) => setMealType(value)} value={mealType}>
            <SelectTrigger className="w-72">
                <SelectValue placeholder="Выберите тип блюда" />
            </SelectTrigger>
            <SelectContent className="w-72">
                <SelectGroup>
                    <SelectLabel>Выберите тип блюда:</SelectLabel>
                    <SelectItem value="all">Все типы</SelectItem>
                </SelectGroup>
                {mealTypes.map((type) => <SelectItem key={type} value={type}>{type}</SelectItem>)}
            </SelectContent>
        </Select>
    )
}

export default MealTypeSelect