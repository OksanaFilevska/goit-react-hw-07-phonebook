import React from 'react';
// import { connect } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import s from './ContactList.module.css';
// import contactsActions from 'redux/contacts/contacts-actions';
// import contactsOperations from 'redux/contacts/contacts-operations';
// import { getVisibleContacts } from 'redux/contacts/contacts-selectors';
import { useDeleteContactMutation, useFetchContactsQuery } from 'redux/contacts/contactsSlice';

const ContactList = () => {
  // const contacts = useSelector(state => getVisibleContacts(state));
  // const dispatch = useDispatch();
  // const getVisibleContact = useSelector(getVisibleContacts);

  // const { data: contacts } = useFetchContactsQuery(null, { getVisibleContacts });
  const { data: contacts } = useFetchContactsQuery();

  const [deleteContact] = useDeleteContactMutation();

  return (
    <ul className="s.list">
      {contacts &&
        contacts.map(({ id, name, phone }) => (
          <li key={id} className={s.item}>
            <p className="s.contacts">
              {name}: <span>{phone}</span>
            </p>
            <button
              type="button"
              className={s.btnList}
              // onClick={() => dispatch(contactsOperations.deleteContact(id))}
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
