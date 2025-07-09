import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login()
 {
 
  const {register,handleSubmit,setValue} = useForm();

  const navigate = useNavigate();

  function onLogin()
  {
    navigate('/dashboard');
  }

  return (
    <div>
        <h2>Login Form</h2>

        <form onSubmit={handleSubmit(onLogin)}>
          Username : <input type="text"/> <br /><br />
          Password : <input type="password"/><br /><br />
          UserType : <select>
                        <option>ADMIN</option>
                        <option>CRM</option>
                      </select> <br /><br />
          <input type="submit" value="LOGIN" />
        </form>
    </div>
  )
}

export default Login;