import {SearchIcon} from "@/shared/ui/navbar/SearchIcon";
import './Search.css'

interface SearchProps {

}

export function Search () {
    return (
        <div className={"search-wrapper"}>
            <SearchIcon className="search-icon" />
            <input
                className="search-input"
                placeholder="Что хочешь включить?"
            />
        </div>
    )
}