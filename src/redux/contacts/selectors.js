import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.contacts.items;
export const getIsLoading = state => state.contacts.contacts.isLoading;
export const getError = state => state.contacts.contacts.error;
export const getFilter = state => state.contacts.filter;

export const selectedFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, query) =>
    contacts.filter(contact => contact.name.toLowerCase().includes(query))
);
