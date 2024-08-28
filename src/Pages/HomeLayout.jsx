import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <Outlet />
    </>
  );
};
export default HomeLayout;
