import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { slug } = useParams();
  const baseurl = `${import.meta.env.VITE_API_URL}/product/get/${slug}`;
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(baseurl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data.products);
      });
  }, [slug]);
};

export default ProductDetails;
