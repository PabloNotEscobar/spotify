import {SearchIcon} from "@/shared/ui/navbar/SearchIcon";
import './Search.css'

interface SearchProps {
    setFilter: () => void
}

export function Search ({setFilter}: SearchProps) {
    return (
        <div className={"search-wrapper"}>
            <SearchIcon className="search-icon" />
            <input
                className="search-input"
                placeholder="Что хочешь включить?"
                onChange={setFilter}
            />
        </div>
    )
}