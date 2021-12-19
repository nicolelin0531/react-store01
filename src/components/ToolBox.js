import React from "react";
// import { withRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";

class ToolBox extends React.Component {
  state = {
    searchText: "",
  };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      searchText: value,
    });
    this.props.search(value);
  };

  clearSearchText = (e) => {
    this.setState({
      searchText: "",
    });
    this.props.search("");
  };

  goCart = () => {
    // this.props.history.push("cart");
    this.props.navigate("cart");
  };

  render() {
    return (
      <div className="tool-box">
        <div className="logo-text">Store</div>
        <div className="search-box">
          <div className="field has-addons">
            <div className="control">
              <input
                type="text"
                className="input search-input"
                placeholder="Search Product"
                value={this.state.searchText}
                onChange={this.handleChange}
              />
            </div>
            <div className="control">
              <button className="button" onClick={this.clearSearchText}>
                X
              </button>
            </div>
          </div>
        </div>
        <div className="cart-box" onClick={this.goCart}>
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-num">({this.props.cartNum})</span>
        </div>
      </div>
    );
  }
}
function WithNavigateToolBox(props) {
  let navigate = useNavigate();
  return <ToolBox {...props} navigate={navigate} />;
}

// export default withRouter(ToolBox);
export default WithNavigateToolBox;
