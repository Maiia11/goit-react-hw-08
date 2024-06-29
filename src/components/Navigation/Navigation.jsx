import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { selectLoggedIn } from "../../redux/auth/selectors"

const Navigation = () => {
  const isLogged = useSelector(selectLoggedIn);
 

  return (
      <nav>
      <NavLink to="/"> Home </NavLink>
      {isLogged && (<NavLink to ="/contacts"> Contacts </NavLink>)}   
    </nav>
  )
}

export default Navigation