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
        payload: res.data.user.userId
      });
      
      dispatch({
        type: "SET_FAVORITES",
        payload: res.data.user.favorites
      })

      dispatch({
        type: "SET_SOCIAL_MEDIA",
        payload: res.data.user.socialMedia
      })
    }
  }

  useEffect(() => {
    sessionCheck();
   
  }, []); 


    return (
        <div className="root-layout">
          <main>
    <header>

      <div  class="logo-container">
      <img src="public/images/GTNLOGO.png" alt="GTN Logo" class="gtn-logo" />
      <h1>GLOBAL<br /> THRIFT<br /> NETWORK</h1>

      </div>
      <nav>
        
        <NavLink to="/">HOME</NavLink>
        <NavLink to="stores">STORES</NavLink>
        <NavLink to="products">PRODUCTS</NavLink>
        <NavLink to="profile">PROFILE</NavLink>
      </nav>
     </header>

     
        <Outlet />
     </main>
        </div>
    )
}