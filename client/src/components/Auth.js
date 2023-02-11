import { useState } from "react";

const Auth = () => {
  const [loggedIn, setloggedIn] = useState(false)
  const [email, setemail] = useState(null)
  const [password, setpassword] = useState(null)
  const [confirmpassword, setconfirmpassword] = useState(null)
  const [error, setError] = useState(null)

  const viewLogin = (status) => {
    setError(null);
    setloggedIn(status);
  }

  const handleSubmit = async (e, endpoint) => {
    e.preventdefault();
    if (!loggedIn && password !== confirmpassword) {
      setError('Passwords don\'t match')
    }
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/${endpoint}`, {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({email,password})
    })

    const data = await res.json()
    console.log(data);
  }

  return (
    <div className="auth-container">
      <div className="auth-container-box">
        <form className="auth-form">
          <h2>{loggedIn ? 'login' : 'signup'}</h2>
          <input type="email" placeholder="Your email goes here" onChange={(e) => setemail(e.target.value)}/>
          <input type="password" placeholder="Your password goes here" onChange={(e) => password(e.target.value)} />
          {!loggedIn && <input type="password" placeholder="Repeat your password" onChange={(e) => setconfirmpassword(e.target.value)} />}
          <input className='create' type='submit' value='SUBMIT' onClick={(e) => handleSubmit(e, loggedIn ? 'login' : 'signup')} />
          {error && <p>{error}</p>}
        </form>
        <div className="auth-options">
          <button
            onClick={() => viewLogin(false)}
            style={{ backgroundColor: !loggedIn ? 'rgb(255,255,255)' : 'rgb(188,188,188)' }}
          >Sign Up</button>
          <button
            onClick={() => viewLogin(true)}
            style={{ backgroundColor: !loggedIn ? 'rgb(255,255,255)' : 'rgb(188,188,188)' }}
          >Login</button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
