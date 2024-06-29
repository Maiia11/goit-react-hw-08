
import ContactList from '../ContactList/ContactList'
import './App.css'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchContacts } from '../../redux/contacts/operations'
import { filteredContacts } from '../../redux/contacts/slice'
import { selectError, selectLoading } from '../../redux/contacts/selectors'
import Layout from '../Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage'
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage"
import LoginPage from '../../pages/LoginPage/LoginPage'
import ContactsPage from '../../pages/ContactsPage/ContactsPage'

function App() {
  const dispatch = useDispatch();
   const contacts = useSelector(filteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  
  useEffect(() => {
       dispatch(fetchContacts())
  }, [ dispatch])
  
 
  
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<RegistrationPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/contacts' element={<ContactsPage/>} />
          
        </Routes>
       
        </Layout>
      
      <h1>Phonebook</h1>
      <ContactForm  />
      <SearchBox />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ContactList contacts={contacts} />
</div>
  )
}

export default App
