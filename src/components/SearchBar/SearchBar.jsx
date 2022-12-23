import PropTypes from "prop-types";
export const SearchBar = ({ submitHandler }) => (
            <header className="Searchbar">
            <form className="SearchForm" onSubmit={submitHandler}>
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

SearchBar.propTypes = {
  submitHandler: PropTypes.func.isRequired,  
};
