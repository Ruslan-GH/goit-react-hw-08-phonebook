import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import s from './Filter.module.css';
import { setFilter } from 'redux/contacts/contactSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const query = useSelector(state => state.contacts.filter);

  const onFilterChange = query => {
    dispatch(setFilter(query));
  };

  return (
    <div>
      <p className={s.Filter}>🔍 Find contacts by name</p>
      <input
        className={s.FilterInput}
        type="text"
        value={query}
        onChange={e => onFilterChange(e.target.value)}
      />
    </div>
  );
};

export default Filter;
