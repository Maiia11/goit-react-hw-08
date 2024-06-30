import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { selectLoggedIn } from "../../redux/auth/selectors"
import clsx from "clsx";
import css from './Navigation.module.css'

const Navigation = () => {
  const isLogged = useSelector(selectLoggedIn);

  return (
      <nav>
      <NavLink to="/" className={clsx(css.link, css.homeLink)}> Home </NavLink>
      {isLogged && (<NavLink to ="/contacts" className={clsx(css.link, css.homeLink)}> Contacts </NavLink>)}   
    </nav>
  )
}

export default Navigation