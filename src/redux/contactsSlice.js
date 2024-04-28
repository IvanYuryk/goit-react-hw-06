import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    status: 'idle',
    error: null,
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact(state, action) {
            state.items.push(action.payload);
        },
        deleteContact(state, action) {
            state.items = state.items.filter(contact => contact.id !== action.payload);
        },
        fetchContactsStart(state) {
            state.status = 'loading';
        },
        fetchContactsSuccess(state, action) {
            state.status = 'succeeded';
            state.items = action.payload;
        },
        fetchContactsFailure(state, action) {
            state.status = 'failed';
            state.error = action.payload;
        },
    },
});

export const { addContact, deleteContact, fetchContactsStart, fetchContactsSuccess, fetchContactsFailure } = contactsSlice.actions;

export const selectContacts = state => state.contacts.items;
export const selectContactsStatus = state => state.contacts.status;
export const selectContactsError = state => state.contacts.error;

export const selectFilteredContacts = (state, searchTerm) => {
    const contacts = selectContacts(state);
    if (!searchTerm) {
        return contacts;
    }
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
};

export default contactsSlice.reducer;
