import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm"
import ContactList from "../../components/ContactList/ContactList"
import SearchBox from "../../components/SearchBox/SearchBox"
import { filteredContacts } from "../../redux/contacts/slice";
import { selectError, selectLoading } from "../../redux/contacts/selectors";


const ContactsPage = () => {
  const contacts = useSelector(filteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm  />
      <SearchBox />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ContactList contacts={contacts} />
    </div>
  )
}

export default ContactsPage