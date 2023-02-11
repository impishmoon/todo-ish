const Auth = () =>{
  const loggedIn=false;

  const handleChange = (e) => {
    // const { name, value } = e.target;
    // setData(data => ({
    //   ...data,
    //   [name]: value
    // }))
    const {passhash,email} = e.target;
  }

    return (
      <div className="auth-container">
        <div className="auth-container-box">
            <form className="auth-form">
              <h2>Log In</h2>
            <input
              type="email"
              id='email'
              name='password'
              >
              </input>
              <input
              type="password"
              id='passowrd'
              name='password'
              onChange={handleChange}
              >
              </input>
              <input className='authsubmit' type='submit' value='SUBMIT' />
            </form>
        </div>
      </div>
    );
  }
  
  export default Auth;
  