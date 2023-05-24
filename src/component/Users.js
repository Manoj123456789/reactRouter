import { Link, Outlet, useParams } from "react-router-dom";

export const Users = () => {
  const params = useParams();
  console.log(params);
  const UserId = params.UserId;
  const abc = params.abc;
  return (
    <>
      <h1>
        THis is user {UserId} {abc}
      </h1>
      <Outlet />
      <nav>
        <Link to="profile">Profile</Link>
        <Link to="account">Account</Link>
      </nav>
    </>
  );
};
