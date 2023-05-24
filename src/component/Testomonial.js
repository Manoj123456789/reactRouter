import React from "react";
// import { useNavigate } from "react-router";
import { NavLink, Outlet } from "react-router-dom";

export const Testomonial = () => {
  //   const navigate = useNavigate();
  return (
    <>
      <div> This is Testomonial page</div>
      {/* <button onClick={() => navigate(-1)}>Go Back</button> */}
      <nav>
        <NavLink to="old">Old</NavLink>
        <NavLink to="new">New</NavLink>
      </nav>
      <Outlet />
    </>
  );
};
