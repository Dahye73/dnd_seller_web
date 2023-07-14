import search_sytles from "./search.module.css";

const SearchBar = () => {

    return (
        <div className= {search_sytles.search__container}>
            <input className={search_sytles.search__input} type="text" placeholder=""/>
        </div>
    )
}

export default SearchBar;