import search_sytles from "./search.module.css";

const SearchBar = () => {

    return (
        <body>
            <div className= {search_sytles.search__container}>
                <input className={search_sytles.search__input} type="text" placeholder=""/>

            </div>

            
        </body>
    )
}

export default SearchBar;