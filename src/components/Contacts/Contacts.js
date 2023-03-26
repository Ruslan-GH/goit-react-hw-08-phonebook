import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import DeleteIcon from '@mui/icons-material/Delete';

import s from './Contacts.module.css';
import { deleteContact } from 'redux/contacts/operations';
import { selectedFilteredContacts } from 'redux/contacts/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectedFilteredContacts);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={s.ContactList}>
      <h3 className={s.Title}>Your contacts</h3>
      {filteredContacts.map(contact => (
        <li key={nanoid()} className={s.ContactList__item}>
          <div className={s.ContactIcon}>
            <ContactPhoneIcon color="success" fontSize="large" />
          </div>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button
            className={s.ContactList__deleteBtn}
            onClick={() => onDeleteContact(contact.id)}
          >
            <div>
              <DeleteIcon color="error" />
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
};
