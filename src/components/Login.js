import React, { Fragment } from "react";

class Login extends React.Component {
  render() {
    return (
      <Fragment>
        <form className="login-wrapper">
          <div>
            <label>Email</label>
            <div>
              <input type="text" placeholder="Email" />
            </div>
          </div>
          <div>
            <label>Password</label>
            <div>
              <input type="text" placeholder="Password" />
            </div>
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      </Fragment>
    ); //jsx技術
  }
}

export default Login;
