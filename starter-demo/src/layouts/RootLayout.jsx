import React, { useLayoutEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <div className="root-layout">
    <header>
      <nav>
        <h1>CANNON</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="stores">Stores</NavLink>
        <NavLink to="items">Items</NavLink>
        <NavLink to="profile">Profile</NavLink>
      </nav>
     </header>

     <main>
        <Outlet />
     </main>
        </div>
    )
}