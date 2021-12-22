import React from "react";
import axios from "commons/axios";
import { toast } from "react-toastify";
import Panel from "components/Panel";
import { formatPrice } from "commons/helper";
import EditInventory from "components/EditInventory";
import { useNavigate } from "react-router-dom";

class Product extends React.Component {
  toEdit = () => {
    Panel.open({
      component: EditInventory,
      props: {
        product: this.props.product,
        deleteProduct: this.props.delete,
      },
      callback: (data) => {
        console.log(data);
        if (data) {
          this.props.update(data);
        }
      },
    });
  };

  addCart = async () => {
    if (!global.auth.isLogin()) {
      this.props.navigate("login");
      toast.info("Please Login First");
      return;
    }
    try {
      const { id, name, image, price } = this.props.product;
      const res = await axios.get(`/carts?productId=${id}`);
      const carts = res.data;
      console.log(carts);

      if (carts && carts.length > 0) {
        const cart = carts[0];
        cart.mount += 1;
        await axios.put(`/carts/${cart.id}`, cart);
      } else {
        const cart = {
          productId: id,
          name,
          image,
          price,
          mount: 1,
        };
        await axios.post("/carts", cart);
      }
      toast.success("Add Cart Success");
      this.props.updateCartNum();
    } catch (error) {
      toast.error("Add Cart Failed");
    }
  };

  renderManagerBtn = () => {
    const user = global.auth.getUser() || {};
    if (user.type === 1) {
      <div className="p-head has-text-right" onClick={this.toEdit}>
        <span className="icon edit-btn">
          <i className="fas fa-sliders-h"></i>
        </span>
      </div>;
    }
  };

  render() {
    const { name, image, tags, price, status } = this.props.product;
    const _pClass = {
      available: "product",
      unavailable: "product out-stock",
    };
    return (
      <div className={_pClass[status]}>
        <div className="p-content">
          {this.renderManagerBtn()}
          <div className="img-wrapper">
            <div className="out-stock-text">Out of Stock</div>
            <figure className="img is-4by3">
              <img src={image} alt={name} />
            </figure>
          </div>
          <p className="p-tags">{tags}</p>
          <p className="p-name">{name}</p>
        </div>
        <div className="p-footer">
          <p className="price">{formatPrice(price)}</p>
          <button
            className="add-cart"
            disabled={status === "unavailable"}
            onClick={this.addCart}
          >
            <i className="fas fa-shopping-cart"></i>
            <i className="fas fa-exclamation"></i>
          </button>
        </div>
      </div>
    );
  }
}
function WithNavigateToolBox(props) {
  let navigate = useNavigate();
  return <Product {...props} navigate={navigate} />;
}

export default WithNavigateToolBox;
