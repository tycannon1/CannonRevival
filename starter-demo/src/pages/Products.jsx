import Card from "../components/shopCard";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Products() {
  const [products, setProducts] = useState([]);

  // const dispatch = useDispatch()

  let cards = async () => {
    axios.get("/api/products").then((res) => {
      setProducts(res.data);
    });
  };

  
  useEffect(() => {
    cards();
    // fetchFavorites()
  }, []);

  const myProducts = products.map((product) => (
    <Card product={product} key={product.productId} />
  ));

  return (
    <>
      <div className="store">
        <h2>ITEMS!</h2>
        <p>yeehaw</p>
      </div>
      {myProducts}
    </>
  );
}

