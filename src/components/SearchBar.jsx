import React, { useState } from "react";
import "../css/SearchBar.css"

const SearchBar = ({ searchFunc }) => {
    const [searchTerm, setSearchTerm] = useState("");

    function handleChange(e){
        setSearchTerm(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        searchFunc(searchTerm.trim() || undefined);
        setSearchTerm(searchTerm.trim());
    }
    return (
        <div className="SearchBar">
            <form className="SearchBar-form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    className="SearchBar-input"
                    name="searchTerm"
                    placeholder="Enter search term..."
                    value={searchTerm}
                    onChange={handleChange} 
                />
                <button type="submit" className="SearchBar-btn">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;