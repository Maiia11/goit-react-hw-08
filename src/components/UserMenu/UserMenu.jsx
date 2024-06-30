import { useDispatch, useSelector } from "react-redux"
import { loggOutOperation } from "../../redux/auth/operations"
import { selectUser } from "../../redux/auth/selectors"
import css from './UserMenu.module.css'


export const UserMenu = () => {

  const { name } = useSelector(selectUser)
 

  const dispatch = useDispatch()
  const handleLoggout = () => {
    dispatch(loggOutOperation());
  } 
  
  return (
    <div className={css.container}>
      <p className={css.text}>Welcome, {name}</p>
      <button type="button" className={css.btn} onClick={handleLoggout}>Log out</button>
    </div>
  )
}
