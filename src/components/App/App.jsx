
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
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute'

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
          <Route element={<RestrictedRoute/>}>
            <Route path='/register' element={<RegistrationPage />} />
          <Route path='/login' element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
             <Route path='/contacts' element={<ContactsPage/>} />
          </Route>
         
          
        </Routes>
       
        </Layout>
      
</div>
  )
}

export default App
