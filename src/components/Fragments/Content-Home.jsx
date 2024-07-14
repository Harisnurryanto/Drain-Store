import React, { useState, useEffect, useContext } from "react";
import ContentCard from "../Elements/Content-Card/index.jsx";
import MainBody from "../Elements/Main-Body/index.jsx";
import { Cart } from "../../Context/CartContext.jsx";

const ContentHome = (props) => {
  const { Token, axiosJwt } = props;
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(Cart);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
      console.log(data);
    });
  }, [Token, axiosJwt]);

  const getProducts = async (callback) => {
    try {
      const response = await axiosJwt.get(
        "http://localhost:3000/api/user/products",
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      callback(response.data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div>
      <MainBody custom="flex flex-wrap">
        {products.map((product) => (
          <ContentCard
            key={product.id}
            header={product.name}
            description={product.description}
            srcimg={product.img}
            price={product.price}
            addToCart={() => addToCart(product)}
          />
        ))}
      </MainBody>
    </div>
  );
};

export default ContentHome;
