import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { selectLoggedIn, selectToken } from "../../redux/auth/selectors"

const RestrictedRoute = () => {
  const isLogged = useSelector(selectLoggedIn);
    const token = useSelector(selectToken);

    if (!isLogged && token) {
        return <> <p>Loading...</p> </>
    }
    
    if (isLogged && token) {
        return <Navigate to="/contacts"/>
    }

    return (
       
      
    <Outlet/>
  )
}

export default RestrictedRoute