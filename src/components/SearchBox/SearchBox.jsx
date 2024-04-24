import css from "./SearchBox.module.css";

const SearchBox = ({ searchTerm, onSearchChange }) => {
  return (
    <div>
      <input
        className={css.searchBox}
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;
