import { useState } from "react";

const Auth = () => {
  const [loggedIn, setloggedIn] = useState(true)
  const [error, setError] = useState(null)

  const viewLogin = (status) =>{
    setError(null);
    setloggedIn(status);
  }

  const handleChange = (e) => {
    // const { name, value } = e.target;
    // setData(data => ({
    //   ...data,
    //   [name]: value
    // }))
    const { passhash, email } = e.target;
  }

  return (
    <div className="auth-container">
      <div className="auth-container-box">
        <form className="auth-form">
          <h2>{loggedIn ? 'Log In' : 'Sign Up'}</h2>
          <input type="email" placeholder="Your email goes here" />
          <input type="password" placeholder="Your password goes here" onChange={handleChange} />
          {!loggedIn && <input type="password" placeholder="Repeat your password" onChange={handleChange}/>}
          <input className='create' type='submit' value='SUBMIT' />
          {error && <p>{error}</p>}
        </form>
        <div className="auth-options">
          <button 
            onClick={() => viewLogin(false)}
            style={{backgroundColor: !loggedIn?'rgb(255,255,255)':'rgb(188,188,188)'}}
          >Sign Up</button>
          <button onClick={() => viewLogin(true)}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
