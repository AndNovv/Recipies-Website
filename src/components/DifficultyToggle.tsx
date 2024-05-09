import React, { Dispatch, SetStateAction } from 'react'

import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"

const DifficultyToggle = ({ difficulty, setDifficulty }: { difficulty: string, setDifficulty: Dispatch<SetStateAction<string>> }) => {
    return (
        <div className="w-72">
            <ToggleGroup value={difficulty} onValueChange={(value) => setDifficulty(value)} type="single" variant={"outline"}>
                <ToggleGroupItem value="any" aria-label="Toggle any" className="rounded-l-[2px]">
                    Любая
                </ToggleGroupItem>
                <ToggleGroupItem value="easy" aria-label="Toggle easy" className="-ml-[1px]">
                    Низкая
                </ToggleGroupItem>
                <ToggleGroupItem value="medium" aria-label="Toggle medium" className="rounded-r-[2px] -ml-[1px]">
                    Средняя
                </ToggleGroupItem>
                <ToggleGroupItem disabled value="hard" aria-label="Toggle hard" className="rounded-r-[2px] -ml-[1px]">
                    Высокая
                </ToggleGroupItem>
            </ToggleGroup>
        </div>
    )
}

export default DifficultyToggle