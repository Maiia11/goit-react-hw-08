import { useDispatch } from "react-redux";
import { LoginForm } from "../../components/LoginForm/LoginForm"
import { loginOperation } from "../../redux/auth/operations";


const LoginPage = () => {
  const dispatch = useDispatch();
  const login = (userData) => {
   dispatch(loginOperation(userData))

  }
  
  return (
    <div><LoginForm submit={login} /></div>
  )
}

export default LoginPage