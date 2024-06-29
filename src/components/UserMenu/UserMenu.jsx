import { useDispatch, useSelector } from "react-redux"
import { loggOutOperation } from "../../redux/auth/operations"
import { selectUser } from "../../redux/auth/selectors"


export const UserMenu = () => {

  const user = useSelector(selectUser)
  console.log(user);

  const dispatch = useDispatch()
  const handleLoggout = () => {
    dispatch(loggOutOperation());
  } 
  
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={handleLoggout}>Log out</button>
    </div>
  )
}
