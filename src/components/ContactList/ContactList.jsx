import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { deleteContact } from '../../redux/contactsSlice';
import { useMemo, useCallback } from 'react';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts?.items ?? []);
  const filter = useSelector(state => state.filters?.name ?? '');
  const dispatch = useDispatch();

  const visibleContacts = useMemo(() => {
    return contacts.filter(contact =>
      contact.name?.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  const onDelete = useCallback(
    id => {
      if (id) {
        dispatch(deleteContact(id));
      }
    },
    [dispatch]
  );

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(contact => (
        <Contact key={contact.id} item={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
}
