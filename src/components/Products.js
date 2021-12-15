import React from "react";
import axios from "commons/axios";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ToolBox from "components/ToolBox";
import Product from "components/Product";
import Panel from "components/Panel";
import AddInventory from "components/AddInventory";

class Products extends React.Component {
  state = {
    products: [],
    sourceProducts: [],
  };

  componentDidMount() {
    axios.get("/products").then((response) => {
      this.setState({
        products: response.data,
        sourceProducts: response.data,
      });
    });
  }

  //search
  search = (text) => {
    console.log(text);
    //1. Get New Array
    let _products = [...this.state.sourceProducts];

    //2. Filter New Array
    _products = _products.filter((p) => {
      //name: Abcd text:ab ===> ['Ab']
      //text: '' ===> ["","","",""]
      const matchArray = p.name.match(new RegExp(text, "gi")); //gi：全局不區分大小寫
      return !!matchArray;
    });

    //3. set State
    this.setState({
      products: _products,
    });
  };

  toAdd = () => {
    Panel.open({
      component: AddInventory,
      callback: (data) => {
        console.log("Products Data", data);
      },
    });
  };

  render() {
    return (
      <div>
        <ToolBox search={this.search}></ToolBox>
        <div className="products">
          <div className="columns is-multiline is-desktop">
            <TransitionGroup component={null}>
              {this.state.products.map((p) => {
                return (
                  <CSSTransition
                    classNames="product-fade"
                    timeout={300}
                    key={p.id}
                  >
                    <div className="column is-3" key={p.id}>
                      <Product product={p}></Product>
                    </div>
                  </CSSTransition>
                );
              })}
            </TransitionGroup>
          </div>
          <button className="button is-primary add-btn" onClick={this.toAdd}>
            add
          </button>
        </div>
      </div>
    );
  }
}

export default Products;
