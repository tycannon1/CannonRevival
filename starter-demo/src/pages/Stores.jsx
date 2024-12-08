import StoreCard from "../components/storeFront";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Stores() {
  const [stores, setStores] = useState([]);

  let storeCards = async () => {
    axios.get("/api/stores").then((res) => {
      setStores(res.data);
    });
  };
  
  useEffect(() => {
    storeCards();
  }, []);

  const myStores = stores.map((store) => (
    <StoreCard store={store} key={store.storeId} />
  ));

  return (
    <>
      <div className="stores">
        <h2>Stores!</h2>
        <p>yeehaw</p>
      </div>
      {myStores}
    </>
  );
}