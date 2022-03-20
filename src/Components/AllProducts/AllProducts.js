import React, { useEffect, useState } from "react";
import Product from "../SingleProduct/Product";

const AllProducts = (props) => {
  const { cart } = props;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <Product pd={product} key={product.id} cart={cart}></Product>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
