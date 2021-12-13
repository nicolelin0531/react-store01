import React from "react";

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <div className="p-content">
          <div className="img-wrapper">
            <figure className="img is-4by3">
              <img src="images/2.jpg" alt="我的英雄學院" />
            </figure>
            <p className="p-tags">26集</p>
            <p className="p-name">我的英雄學院</p>
          </div>
        </div>
        <div className="p-footer">
          <p className="price">$800</p>
          <button className="add-cart">
            <i className="fas fa-shopping-cart"></i>
            <i className="fas fa-exclamation"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
