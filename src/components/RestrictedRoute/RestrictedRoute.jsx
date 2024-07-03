import { useSelector } from "react-redux"
import { Navigate} from "react-router-dom"
import { selectLoggedIn } from "../../redux/auth/selectors"

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogged = useSelector(selectLoggedIn);
    
    return isLogged ? <Navigate to={redirectTo} /> : Component;
}

export default RestrictedRoute