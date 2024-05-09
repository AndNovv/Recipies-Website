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
import { foodTypeGroupedOptions } from '@/data/data'

const FoodTypeSelect = ({ foodType, setFoodType }: { foodType: string, setFoodType: Dispatch<SetStateAction<string>> }) => {
    return (
        <Select onValueChange={(value: string) => setFoodType(value)} value={foodType}>
            <SelectTrigger className="w-72">
                <SelectValue placeholder="Выберите тип блюда" />
            </SelectTrigger>
            <SelectContent className="w-72">
                <SelectGroup>
                    <SelectLabel>Выберите тип блюда:</SelectLabel>
                    <SelectItem value="all">Все типы</SelectItem>
                </SelectGroup>
                {foodTypeGroupedOptions.map((group) =>
                    <SelectGroup key={group.groupTitle}>
                        <SelectLabel>{group.groupTitle}</SelectLabel>
                        {Array.from(group.foodTypes).map((foodType) => <SelectItem key={foodType[0]} value={foodType[0]}>{foodType[1]}</SelectItem>)}
                    </SelectGroup>
                )}
            </SelectContent>
        </Select>
    )
}

export default FoodTypeSelect