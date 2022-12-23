import { Component } from "react";

export class SearchBar extends Component { 
    
    render() {
        return (
            <header className="Searchbar">
            <form className="SearchForm" onSubmit={this.props.submitHandler}>
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>
                <input
                    className="SearchForm-input"
                    name="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
            </header>
        )
    }    
}