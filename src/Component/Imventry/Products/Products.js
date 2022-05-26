import React from "react";
import useProduct from "../../../Hooks/useProduct/useProduct";
import ProDuct from "./ProDuct";
const Products = () => {
  const [Product, setProduct] = useProduct();
  const handleUpdate = () =>{
  }
  return (
    <div className="container bg-gradient p-2 text-dark bg-opacity-10">
      <h2>Our Product</h2>
      <div className="row">
        {Product.map((res, index) => index < 6 &&(
          <ProDuct
            key={res._id}
            id={res._id}
            BarCode={res.BarCode}
            img={res.Product_img_url}
            sup={res.Brand}
            name={res.Product}
            style={res.Style}
            stock={res.Stock_Qty}
            price={res.RPU}
            discription={res.long_discription}
            button={handleUpdate}

          ></ProDuct>
        ))}
      </div>
    </div>
  );
};

export default Products;
