import { useRef } from "react";
import Toast from "react-hot-toast";
import PropTypes from "prop-types";
import Styles from "./SearchBar.module.css";

export default function SearchBar({ query, setQuery, setPage }) {
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const inputVal = inputRef.current.value.trim().toLowerCase();

    if (inputVal === "" || inputVal === query) {
      Toast.error("Please type something different to search!");
    } else {
      setQuery(inputVal);
      setPage(1);
    }
  }

  return (
    <header className={Styles.header}>
      <form onSubmit={(e) => handleSubmit(e)} className={Styles.searchForm}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search images and photos"
          ref={inputRef}
          className={Styles.searchInput}
        />
        <button type="submit" className={Styles.searchBtn}>
          Search
        </button>
      </form>
    </header>
  );
}

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};
