
import './App.css'
import { useDispatch, useSelector} from 'react-redux'
import { Suspense, lazy, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage"
import { currentOperation } from '../../redux/auth/operations'
import {selectisRefreshing } from '../../redux/auth/selectors'


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

  const isRefreshing = useSelector(selectisRefreshing);
  console.log(isRefreshing);
  
  
  return isRefreshing ? (<b>Refreshing user...</b>) :
    ( <div>
      <Suspense fallback={null}>
      <Layout>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<RestrictedRoute redirectTo='/contacts' component={<RegistrationPage />} />}/>
            <Route path='/login' element={<RestrictedRoute redirectTo='/contacts' component={<LoginPage />} />} />
            <Route path='/contacts' element={<PrivateRoute redirectTo='/login' component={<ContactsPage/>}/>} />
        </Routes>
        </Layout>
      </Suspense>
    </div>
  )
}

export default App
