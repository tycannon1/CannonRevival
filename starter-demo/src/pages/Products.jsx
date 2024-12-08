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
      <div className="prodHead">
        <h2>FEATURED STORE PRODUCTS</h2>
        <p></p>
      </div>
      <div className="prodOver">
      {myProducts}
      </div>
      <footer className="footer">
        <p>&copy; 2024 Global Thrift Network</p>
        <p><a href="mailto:info@globalthrift.com">info@globalthrift.com</a></p>
        <p>Lehi, Utah</p>
      </footer>
    </>
  );
}

