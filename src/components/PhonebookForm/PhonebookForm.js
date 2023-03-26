import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import Button from '@mui/material/Button';

import s from './PhonebookForm.module.css';
import { addContact } from 'redux/contacts/operations';

export const PhonebookForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.contacts.items);

  const dispatch = useDispatch();

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const onAddContact = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const checkedName = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (checkedName) {
      alert('This Name already exist!');
      return;
    }

    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={s.Form} onSubmit={onAddContact}>
        <label className={s.Label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleNameChange}
            placeholder="enter name, pls"
            className={s.Input}
          />
        </label>
        <label className={s.Label}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleNumberChange}
            placeholder="enter number, pls"
            className={s.Input}
          />
        </label>
        <div className={s.Button}>
          <Button size="small" type="submit" variant="contained">
            Add contact
          </Button>
        </div>
      </form>
    </div>
  );
};
