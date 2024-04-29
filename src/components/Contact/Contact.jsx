import css from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone, faTrash } from "@fortawesome/free-solid-svg-icons";

import { deleteContact } from "../../redux/contactsSlice.js";
import { useDispatch } from "react-redux";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
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
      <button onClick={() => onDeleteContact(id)}>
        Delete <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
};

export default Contact;
