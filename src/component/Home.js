import React from "react";
import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>This is Home page</div>
      <button onClick={() => navigate("testomonial", { replace: true })}>
        testomonial
      </button>
    </>
  );
};
