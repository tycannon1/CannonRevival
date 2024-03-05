import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

export default function RootLayout() {

  const dispatch = useDispatch()

  const sessionCheck = async () => {
    const res = await axios.get("/api/session-check");
    if (res.data.success) {
      dispatch({
        type: "USER_AUTH",
        payload: res.data.userId
      });
      
      dispatch({
        type: "SET_FAVORITES",
        payload: res.data.userFavorites
      })
    }
  }

  useEffect(() => {
    sessionCheck();
   
  }, []); 

    return (
        <div className="root-layout">
    <header>
      <nav>
        <h1>CANNON</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="stores">Stores</NavLink>
        <NavLink to="products">Products</NavLink>
        <NavLink to="profile">Profile</NavLink>
      </nav>
     </header>

     <main>
        <Outlet />
     </main>
        </div>
    )
}