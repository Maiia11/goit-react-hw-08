import { useSelector } from "react-redux"
import AuthNav from "../AuthNav/AuthNav"
import Navigation from "../Navigation/Navigation"
import { UserMenu } from "../UserMenu/UserMenu"
import { selectLoggedIn } from "../../redux/auth/selectors"


const AppBar = () => {
  const isLogged = useSelector(selectLoggedIn);
  return (
      <div>
      <Navigation />
      { isLogged ? <UserMenu/>  : <AuthNav />}
         
    </div>
  )
}

export default AppBar