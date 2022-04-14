import React from "react";
import "./Cart.css";

function CartItem({ closeModal, products, removeProduct }) {
  console.log(products);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal()}> X </button>
        </div>
        <div className="title">Shopping Cart</div>
        <div className="body">
          {products.length === 0 ? (
            <div> No products in your shopping Cart</div>
          ) : (
            <>
              {Object.keys(products).map((keyName, i) =>
                products[keyName]["addedToCart"] ? (
                  <div className="row" key={i}>
                    <div className="column">{keyName}</div>
                    <div className="column">
                        <button className="btn btn-danger btn-round-2"  onClick={(e) => {
                      removeProduct(keyName);
                    }}>Remove</button>
                    </div>
                  </div>
                ) : null
              )}
              
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartItem;
