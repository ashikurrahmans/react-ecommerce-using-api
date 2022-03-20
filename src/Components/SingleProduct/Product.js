import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductModal from "../ProductModal/ProductModal";
import AOS from "aos";
import "aos/dist/aos.css";

const Product = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div data-aos="fade-right" className="col-md-3 mt-1 ">
      <div className="card p-3 border">
        <div className="card-body">
          <img
            className="m-auto"
            src={props.pd.image}
            alt=""
            style={{ width: "200px", height: "200px" }}
          />
          <h2>{props.pd.title.slice(0, 10)}</h2>
          <div className="d-flex justify-content-around">
            <button className="btn btn-success me-2" onClick={props.cart}>
              AddToCart
            </button>
            <button className="btn btn-danger me-2">Delete</button>
            <ProductModal productinfo={props.pd}></ProductModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
