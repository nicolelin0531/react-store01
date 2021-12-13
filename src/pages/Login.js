import React from "react";
import { useNavigate } from "react-router-dom";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (event) => {
    // 1. 阻止默認事件行為
    event.preventDefault();

    // 2. 獲取表單數據
    console.log(this.state);
    // 3. 處理登入邏輯

    // 4. 跳轉到首頁
    // this.props.history.push("/");
    this.props.navigate("/");
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="login-wrapper">
        <form className="box login-box" onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="control">
            <button className="button is-fullwidth is-primary">Login</button>
          </div>
        </form>
      </div>
    ); //jsx技術
  }
}
function WithNavigate(props) {
  let navigate = useNavigate();
  return <Login {...props} navigate={navigate} />;
}

export default WithNavigate;
