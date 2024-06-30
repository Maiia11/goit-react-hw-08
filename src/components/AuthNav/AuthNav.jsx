import { NavLink } from "react-router-dom"
import css from "./AuthNav.module.css"
import clsx from "clsx"


const AuthNav = () => {
  return (
      <div className={css.container}>
          <NavLink to="/register" className={clsx(css.link, css.homeLink)}>Register</NavLink>
           <NavLink to="/login"className={clsx(css.link, css.homeLink)}>Login</NavLink>

    </div>
  )
}

export default AuthNav