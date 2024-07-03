import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectLoggedIn} from "../../redux/auth/selectors"




const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLogged = useSelector(selectLoggedIn);
    return  isLogged ? Component : <Navigate to={redirectTo} />
  
}

export default PrivateRoute