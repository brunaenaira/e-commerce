import { IoIosSearch } from "react-icons/io";
import './search.css';

export default function SearchBar(){
    return(
        <form className="search-bar">
            <input type="search" placeholder="Buscar produto" 
            className="search__input" required />
            <button type="submit" className="search__button">
                <IoIosSearch/>
            </button>
        </form>
    )
}