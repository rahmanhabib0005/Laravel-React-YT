import { Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../contexts/ContextProvider"


const GuessLayout = () => {

  const {token} = useStateContext();

  if(token) {
    return <Navigate to="/" />
  }


  return (
    <div className="login-signup-form animated fadeINDown">
      <div className="form">
        <Outlet />
      </div>
    </div>
  )
}

export default GuessLayout;
