import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice.js";
import { selectName } from "../../redux/filtersSlice.js";

import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectName);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div>
      <input
        className={css.searchBox}
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;