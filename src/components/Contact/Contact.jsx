import css from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone, faTrash } from "@fortawesome/free-solid-svg-icons";

const Contact = ({ id, name, number, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(id);
  };

  return (
    <li className={css.person}>
      <div>
        <h3>
          <FontAwesomeIcon icon={faUser} /> {name}
        </h3>
        <p>
          <FontAwesomeIcon icon={faPhone} /> {number}
        </p>
      </div>
      <button onClick={handleDeleteClick}>
        Delete <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
};

export default Contact;
