import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addContact,
  deleteContact,
  selectFilteredContacts,
  selectContactsStatus,
} from "./redux/contactsSlice";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const filteredContacts = useSelector((state) =>
    selectFilteredContacts(state, searchTerm)
  );
  const contactsStatus = useSelector(selectContactsStatus);

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      {contactsStatus === "loading" ? (
        <p>Loading...</p>
      ) : contactsStatus === "failed" ? (
        <p>Failed to load contacts.</p>
      ) : (
        <ContactList
          contacts={filteredContacts}
          onDelete={handleDeleteContact}
        />
      )}
    </div>
  );
}

export default App;
