import { Section } from "./Section/Section";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from "redux/filterSlice";
import { deleteContact} from "redux/contactSlice";

export const App = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);
  const contacts = useSelector(state => state.contacts)
 
const deleteContactItem = (id) => dispatch(deleteContact(id));

const changeContact = event => {
  dispatch(setFilter(event.currentTarget.value));
}

 const visibleUser = contacts.filter(contact =>
  contact.name.toLowerCase().includes(filters.toLowerCase())
); 

  return (
    <>
  <Section title="Phonebook">
    <ContactForm />
      {contacts.length === 0 ? (null) :
        <Filter value={filters} 
        changeContact={changeContact} 
    />}
  </Section>
      {contacts.length === 0 ? (null) :
      <Section title = "Contacts">
        <ContactList contacts = {visibleUser} 
        onDeleteContact = {deleteContactItem}
        /> 
      </Section>
      }
    </>
  )
};
