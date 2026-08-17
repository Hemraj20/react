import React, { useEffect, useState } from "react";

const Product = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          "http://localhost:3000/api/v1/product/get-product",
        );

        if (!res.ok) {
          throw new Error(`HTTP Error: ${res.status}`);
        }

        const data = await res.json();

        setProductData(data);
      } catch (err) {
        console.log("Error:", err.message);
      }
    };

    getProducts();
  }, []);

  console.log(productData);

  return (
    <div>
      {productData.products?.map((data) => (
        <div>
          <div>
            <h1>{data.name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
