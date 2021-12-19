import React from "react";
import Header from "components/Header";

// const Cart = () => {
//   <Layout>
//   <div className="cart-page">
//     <p className="title has-text-centered">Cart Page</p>
//   </div>;
//   </Layout>;
// };

class Cart extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <div className="cart-page">
          <p className="title has-text-centered">Cart Page</p>
        </div>
      </div>
    );
  }
}

export default Cart;
