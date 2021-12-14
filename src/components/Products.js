import React from "react";
import ToolBox from "components/ToolBox";
import Product from "components/Product";

class Products extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    fetch("http://localhost:3003/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          products: data,
        });
      });
  }

  render() {
    return (
      <div>
        <ToolBox></ToolBox>
        <div className="products">
          <div className="columns is-multiline is-desktop">
            {this.state.products.map((p) => {
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
