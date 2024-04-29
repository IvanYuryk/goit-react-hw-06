import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice.js";
import { selectName } from "../../redux/filtersSlice.js";

import Contact from "../Contact/Contact.jsx";

import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const search = useSelector(selectName);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} {...contact} />
      ))}
    </ul>
  );
};

export default ContactList;
