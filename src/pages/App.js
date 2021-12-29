import React from "react";
import Footer from "./Footer";
import Header01 from "./Header01";
import Main from "./Main";

class Header extends React.Component {
  render() {
    return (
      <div className="post-general">
        <Header01></Header01>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default Header;
