import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Contacts } from 'components/Contacts/Contacts';
import { fetchContacts } from 'redux/contacts/operations';
import { getIsLoading } from 'redux/contacts/selectors';
import { PhonebookForm } from 'components/PhonebookForm/PhonebookForm';
import Filter from '../components/Filter';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <PhonebookForm />
      <Filter />
      <title>Your contacts</title>
      <div>{isLoading && 'Request in progress...'}</div>
      <Contacts />
    </>
  );
}
