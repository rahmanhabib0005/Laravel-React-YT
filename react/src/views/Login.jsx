import { Link } from "react-router-dom"

 const Login = () => {

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
        <form onSubmit={onSubmit}>
          <h1 className="title">
            Login into your account
          </h1>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          <button className="btn btn-block">Login</button>
          <p className="message">
            Not Registered? <Link to="/signup">Create an account</Link>
          </p>
        </form>
  )
}

export default Login;