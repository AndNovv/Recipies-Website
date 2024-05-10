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
import { cuisineTypes } from '@/data/data'

const CuisineSelect = ({ cuisine, setCuisine }: { cuisine: string, setCuisine: Dispatch<SetStateAction<string>> }) => {

    return (
        <Select onValueChange={(value: string) => setCuisine(value)} value={cuisine}>
            <SelectTrigger className="w-72">
                <SelectValue placeholder="Выберите страну" />
            </SelectTrigger>
            <SelectContent className="w-72">

                <SelectGroup>
                    <SelectLabel>Выберите кухню:</SelectLabel>
                    <SelectItem value="all">Все страны и регионы</SelectItem>
                </SelectGroup>

                {cuisineTypes.map((type) => <SelectItem key={type} value={type}>{type}</SelectItem>)}

                {/* {cuisineGroupedOptions.map((group) =>
                    <SelectGroup key={group.groupTitle}>
                        <SelectLabel>{group.groupTitle}</SelectLabel>
                        {Array.from(group.countries).map((country) => <SelectItem key={country[0]} value={country[0]}>{country[1]}</SelectItem>)}
                    </SelectGroup>
                )} */}

            </SelectContent>
        </Select>
    )
}

export default CuisineSelect