import { useDispatch } from "react-redux"
import { loggOutOperation } from "../../redux/auth/operations"


export const UserMenu = () => {

  const dispatch = useDispatch()
  const handleLoggout = () => {
    dispatch(loggOutOperation());
  } 
  
  return (
    <div>
      <p>Welcome user</p>
      <button type="button" onClick={handleLoggout}>Log out</button>
    </div>
  )
}
