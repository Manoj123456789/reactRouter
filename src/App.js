import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./component/Home";
import { About } from "./component/About";
import { Testomonial } from "./component/Testomonial";
import { Navbar } from "./component/Navbar";
import { OldDetails } from "./component/OldDetails";
import { NewDetails } from "./component/NewDetails";
import { NotFound } from "./component/NotFound";
import { Users } from "./component/Users";
import { UserHome } from "./component/UserHome";
import { Admin } from "./component/Admin";
// import Example from "./component/Example";
const LazyExample = React.lazy(() => import("./component/Example"));
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="testomonial" element={<Testomonial />}>
          <Route index element={<OldDetails />}></Route>
          <Route path="old" element={<OldDetails />}></Route>
          <Route path="new" element={<NewDetails />}></Route>
        </Route>
        <Route path="users" element={<UserHome />}>
          <Route path=":UserId" element={<Users />}></Route>
          <Route path="admin" element={<Admin />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>

        <Route path="user" element={<Users />}>
          <Route path="profile" element={<UserHome />} />
          <Route path="account" element={<Admin />} />
        </Route>
        <Route
          path="example"
          element={
            <React.Suspense fallback="Loding....">
              <LazyExample />
            </React.Suspense>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
