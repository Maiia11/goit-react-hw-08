import { useDispatch, useSelector } from "react-redux"
import { loggOutOperation } from "../../redux/auth/operations"
import { selectUser } from "../../redux/auth/selectors"


export const UserMenu = () => {

  const { name } = useSelector(selectUser)
  console.log(name);

  const dispatch = useDispatch()
  const handleLoggout = () => {
    dispatch(loggOutOperation());
  } 
  
  return (
    <div>
      <p>Welcome, {name}</p>
      <button type="button" onClick={handleLoggout}>Log out</button>
    </div>
  )
}
