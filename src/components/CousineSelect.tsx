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
import { cousineGroupedOptions } from '@/data/data'

const CousineSelect = ({ cousine, setCousine }: { cousine: string, setCousine: Dispatch<SetStateAction<string>> }) => {

    return (
        <Select onValueChange={(value: string) => setCousine(value)} value={cousine}>
            <SelectTrigger className="w-72">
                <SelectValue placeholder="Выберите страну" />
            </SelectTrigger>
            <SelectContent className="w-72">

                <SelectGroup>
                    <SelectLabel>Выберите кухню:</SelectLabel>
                    <SelectItem value="all">Все страны и регионы</SelectItem>
                </SelectGroup>

                {cousineGroupedOptions.map((group) =>
                    <SelectGroup key={group.groupTitle}>
                        <SelectLabel>{group.groupTitle}</SelectLabel>
                        {Array.from(group.countries).map((country) => <SelectItem key={country[0]} value={country[0]}>{country[1]}</SelectItem>)}
                    </SelectGroup>
                )}

            </SelectContent>
        </Select>
    )
}

export default CousineSelect