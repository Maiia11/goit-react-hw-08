
import './App.css'
import { useDispatch} from 'react-redux'
import { useEffect } from 'react'
import Layout from '../Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage'
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage"
import LoginPage from '../../pages/LoginPage/LoginPage'
import ContactsPage from '../../pages/ContactsPage/ContactsPage'
import { currentOperation } from '../../redux/auth/operations'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(currentOperation())
  }, [dispatch])
  
  
 
  
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
      
</div>
  )
}

export default App
