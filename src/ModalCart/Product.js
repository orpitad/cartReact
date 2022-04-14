import React from "react";
const imgURL= 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg';
const Product = ({productsConfiguration, addCart}) => {
  // const itemCount = [...itemCount];
    console.log({productsConfiguration, addCart})
  return (
      <>
          <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {Object.keys(productsConfiguration).map((item, index) => (
           
            <div className="col mb-5" key={index}>
            <div className="card h-100">
            <>
            {productsConfiguration[item].salePrice
        ? <div
                className="badge bg-dark text-white position-absolute"
                style={{top: "0.5rem", right: "0.5rem"}}
              >
                Sale
              </div>
        : <></>
      }

            </>
              <img
                className="card-img-top"
                src={imgURL}
                alt="..."
              />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">{productsConfiguration[item].text}</h5>
                  <span className="text-muted text-decoration-line-through">
                  {productsConfiguration[item].salePrice}
                  </span>
                  {productsConfiguration[item].price}
                  
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <button key={item}
                    className={productsConfiguration[item].addedToCart ? "btn btn-outline-dark mt-auto disabled" : "btn btn-outline-dark mt-auto"}
                    onClick={(e) => {
                      e.preventDefault();
                      addCart(item);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
            
        ))}
      
        </div>
      </div>
    </section>
    <hr />
      </>
     
  );
};

export default Product;
