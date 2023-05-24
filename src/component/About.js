import React from "react";
import { useSearchParams } from "react-router-dom";

export const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showHide = searchParams.get("filter") === "show";
  return (
    <>
      <div>This is About page</div>
      <div>
        <button onClick={() => setSearchParams({ filter: "show" })}>
          show filter
        </button>
        <button onClick={() => setSearchParams({})}>hide filter</button>
      </div>
      {showHide ? <h1>filter set</h1> : <h1>filter reset</h1>}
    </>
  );
};
