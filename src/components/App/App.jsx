
import './App.css'
import { useDispatch} from 'react-redux'
import { Suspense, lazy, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage"
import { currentOperation } from '../../redux/auth/operations'



const Layout = lazy(() => import("../Layout/Layout"));
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));
const PrivateRoute = lazy(() => import("../PrivateRoute/PrivateRoute"));
const RestrictedRoute = lazy(() => import("../RestrictedRoute/RestrictedRoute"));



function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(currentOperation())
  }, [dispatch])
  
  
  return (
    <div>
      <Suspense fallback={null}>
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
        </Suspense>
      
</div>
  )
}

export default App
