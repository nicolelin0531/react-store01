import React from "react";
import ToolBox from "components/ToolBox";
import Product from "components/Product";

class Products extends React.Component {
  product = {
    name: "我的英雄學院",
    image: "images/2.jpg",
    tags: "26集",
    price: 800,
    status: "available",
  };

  products = [
    {
      id: 1,
      name: "獵人",
      image: "images/2.jpg",
      tags: "26集",
      price: 800,
      status: "available",
    },
    {
      id: 2,
      name: "進擊的巨人",
      image: "images/3.jpg",
      tags: "26集",
      price: 800,
      status: "available",
    },
    {
      id: 3,
      name: "鋼之鍊金術師",
      image: "images/4.jpg",
      tags: "26集",
      price: 800,
      status: "available",
    },
    {
      id: 4,
      name: "鬼滅之刃",
      image: "images/5.jpg",
      tags: "26集",
      price: 800,
      status: "available",
    },

    {
      id: 5,
      name: "我的英雄學院",
      image: "images/6.jpg",
      tags: "26集",
      price: 800,
      status: "unavailable",
    },
  ];
  render() {
    return (
      <div>
        <ToolBox></ToolBox>
        <div className="products">
          <div className="columns is-multiline is-desktop">
            {this.products.map((p) => {
              return (
                <div className="column is-3" key={p.id}>
                  <Product product={p}></Product>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
